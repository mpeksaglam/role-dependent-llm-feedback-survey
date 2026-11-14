import csv, json, tarfile, os, shutil, hashlib, sys, pathlib, textwrap, zipfile
from collections import Counter
from pathlib import Path
import argparse
parser=argparse.ArgumentParser(description='Extract nonverbatim numeric analysis dataset from internal event-log TAR file')
parser.add_argument('raw_tar',help='Path to internal raw log TAR file, never publish it')
parser.add_argument('--output-dir', default='.',help='Destination for analysis_dataset.csv and exclusion_summary.csv')
args=parser.parse_args()
RAW=Path(args.raw_tar)
STAT=Path(args.output_dir);STAT.mkdir(parents=True, exist_ok=True)
records=[]; exclusion=[]
with tarfile.open(RAW) as tf:
 for m in sorted(tf.getmembers(), key=lambda m:m.name):
  ev=[json.loads(x) for x in tf.extractfile(m)]
  by=lambda k:[e for e in ev if e['eventType']==k]
  s,p,sc,q,co=map(by,['survey_started','pre_survey_completed','scenario_completed','questionnaire_completed','comparison_questions_completed'])
  reasons=[]
  if not s:reasons.append('no_start')
  if not p:reasons.append('no_pre_survey')
  if len(sc)<6:reasons.append('fewer_than_6_scenario_completions')
  for qq in 'AB':
   if not any(e['payload'].get('questionnaire')==qq for e in q):reasons.append('missing_questionnaire_'+qq)
  exclusion.append({'status':'excluded' if reasons else 'included','reason':';'.join(reasons) if reasons else 'complete_two_condition_blocks'})
  if reasons:continue
  order=s[0]['payload']['conditionOrder'];role=p[-1]['payload']['userRole']
  qans={qq:next(e for e in reversed(q) if e['payload'].get('questionnaire')==qq)['payload']['answers'] for qq in 'AB'}
  r={'order':'-'.join(order),'role':role,'final_comparison_present':int(bool(co)),'survey_completed':int(bool(by('survey_completed')))}
  for i,cond in enumerate(order):
   a=qans['AB'[i]]; letter='ab'[i]
   sus=[float(a[f'sus_{letter}_q{k}']) for k in range(1,11)]
   sus_score=2.5*sum(v-1 if k%2 else 5-v for k,v in enumerate(sus,1))
   nasa=[float(a[f'nasa_{letter}_q{k}']) for k in range(1,7)]
   nasa_raw=[(v-1)*10 for v in nasa];nasa_raw[3]=100-nasa_raw[3]
   rf=[float(a[f'role_fit_{letter}_q{k}']) for k in range(1,6)];rf[3]=6-rf[3]
   r[cond+'_sus']=sus_score;r[cond+'_nasa']=sum(nasa_raw)/6;r[cond+'_role_fit']=sum(rf)/5
   r[cond+'_time_s']=sum(float(v['payload'].get('durationSeconds') or 0) for v in sc[i*3:i*3+3])
   r[cond+'_user_turns']=sum(x.get('role')=='user' for x in sc[i*3+1]['payload'].get('chatHistory',[]))
   r[cond+'_round']=i+1
   answers=sc[i*3+2]['payload']['answers'];effVar='A' if i==0 else 'B';ineffVar='B' if i==0 else 'A'
   # Determine actual keys dynamically; labels in final questionnaire validated by selected interface
   if cond=='gen':
    criterion='task_success';qa, qb=3,5
   else:
    criterion='efficiency_motion_quality';qa,qb=4,7
   def getval(k):
    z=[v for key,v in answers.items() if key.endswith(k)]
    if len(z)!=1:raise ValueError((cond,k,answers))
    return int(z[0])
   a_val=getval('q'+str(qa)+'_'+('task_success' if cond=='gen' else 'efficiency')+'_varA')
   b_val=getval('q'+str(qb)+'_'+('task_success' if cond=='gen' else 'efficiency')+'_varB')
   r[cond+'_efficient_rating']=a_val if i==0 else b_val
   r[cond+'_inefficient_rating']=b_val if i==0 else a_val
   pref=next((v for key,v in answers.items() if key.endswith('q1_variant_pref')),None)
   r[cond+'_preference_correct']=int(pref==('variant_a_preferred' if i==0 else 'variant_b_preferred'))
  r['round1_time_s']=r[order[0]+'_time_s'];r['round2_time_s']=r[order[1]+'_time_s']
  records.append(r)
# assign stable-but-arbitrary participant IDs independent of original filename
for i,r in enumerate(records,1):r['case_id']=f'U{i:02d}'
assert len(records)==19 and Counter(r['role'] for r in records)=={'robo_exp':12,'proc_exp':7}
assert sum(r['final_comparison_present'] for r in records)==18
assert sum(r['gen_preference_correct'] for r in records)==18
assert sum(r['role_spec_preference_correct'] for r in records)==16
assert all(r['role_spec_efficient_rating']>r['role_spec_inefficient_rating'] for r in records)
cols=['case_id','role','order','survey_completed','final_comparison_present']+[f'{c}_{m}' for c in ['gen','role_spec'] for m in ['sus','nasa','role_fit','time_s','user_turns','round','efficient_rating','inefficient_rating','preference_correct']]+['round1_time_s','round2_time_s']
with open(STAT/'analysis_dataset.csv','w',newline='',encoding='utf-8') as f:
 w=csv.DictWriter(f,fieldnames=cols);w.writeheader();w.writerows(records)
with open(STAT/'exclusion_summary.csv','w',newline='',encoding='utf-8') as f:
 w=csv.DictWriter(f,fieldnames=['status','reason','count']);w.writeheader()
 for (st,rs),ct in sorted(Counter((x['status'],x['reason']) for x in exclusion).items()):w.writerow({'status':st,'reason':rs,'count':ct})

print(f'Valid participant records: {len(records)}; excluded logs: {len(exclusion)-len(records)}')
