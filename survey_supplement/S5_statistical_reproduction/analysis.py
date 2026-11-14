#!/usr/bin/env python3
""" Python 3.11+, NumPy 2.x, SciPy 1.17.0. No external raw logs required.
"""
import csv, json, sys
from pathlib import Path
import numpy as np
from scipy.stats import wilcoxon, rankdata, binomtest

HERE=Path(__file__).resolve().parent
SEED=20261112
B=20000
QUANTILE_METHOD='linear'
# Predefined family of seven comparisons; exploratory round comparison excluded.
TESTS=[('SUS','role_spec_sus','gen_sus',0.4),
 ('NASA_TLX','role_spec_nasa','gen_nasa',0.6),
 ('Role_fit','role_spec_role_fit','gen_role_fit',5.0),
 ('Completion_time_seconds','role_spec_time_s','gen_time_s',1.0),
 ('Correction_user_turns','role_spec_user_turns','gen_user_turns',1.0),
 ('Generic_perceived_success_efficient_minus_inefficient','gen_efficient_rating','gen_inefficient_rating',1.0),
 ('Role_specific_efficiency_or_motion_quality_efficient_minus_inefficient','role_spec_efficient_rating','role_spec_inefficient_rating',1.0)]

def arr(rows,key):return np.asarray([float(r[key]) for r in rows],dtype=float)

def walsh_hl(d):
    # One-sample paired Hodges-Lehmann pseudomedian: median of n(n+1)/2 Walsh averages.
    return float(np.median((d[:,None]+d[None,:])[np.triu_indices(len(d))]/2))

def bootstrap_hl(d,seed):
    rng=np.random.default_rng(seed)
    n=len(d); out=np.empty(B)
    for i in range(B):out[i]=walsh_hl(d[rng.integers(n,size=n)])
    return list(map(float,np.percentile(out,[2.5,97.5],method=QUANTILE_METHOD)))

def test(rows,label,a,b,factor,idx):
    va,vb=arr(rows,a),arr(rows,b)
    d=va-vb
    # Quantize pre-rank differences at the original response-scale resolution.
    # SUS: 2.5 points; NASA: 10/6 points; Role fit: 0.2; time/turns/ratings: 1 unit.
    d=np.rint(d*factor).astype(np.int64)/factor
    nz=d[d!=0]
    ranks=rankdata(np.abs(nz),method='average') if len(nz) else np.array([])
    wplus=float(ranks[nz>0].sum()) if len(nz) else 0
    wminus=float(ranks[nz<0].sum()) if len(nz) else 0
    rrb=(wplus-wminus)/(wplus+wminus) if len(nz) else 0.0
    p=float(wilcoxon(d,zero_method='wilcox',alternative='two-sided',method='auto').pvalue) if len(nz) else 1.0
    return {'test':label,'n_pairs':len(d),'n_nonzero':int(len(nz)),'positive':int((d>0).sum()),'negative':int((d<0).sum()),'ties':int((d==0).sum()),'p':p,'rrb':rrb,'hl_shift':walsh_hl(d),'ci_low':bootstrap_hl(d,SEED+idx),'ci_high':None,'median_a':float(np.median(va)),'median_b':float(np.median(vb))}

def holm(pvals):
    order=np.argsort(pvals);adj=np.zeros(len(pvals));running=0
    for pos,i in enumerate(order):
        running=max(running, min(1,(len(pvals)-pos)*pvals[i]));adj[i]=running
    return adj

def main():
    with open(HERE/'analysis_dataset.csv',encoding='utf-8') as f:rows=list(csv.DictReader(f))
    assert len(rows)==19 and all(r['case_id'] for r in rows)
    results=[]
    for i,(label,a,b,factor) in enumerate(TESTS):
        r=test(rows,label,a,b,factor,i)
        # avoid recomputing the expensive bootstrap: returned [low,high] held in ci_low initially
        r['ci_low'],r['ci_high']=r['ci_low']
        results.append(r)
    for r,p in zip(results,holm(np.array([r['p'] for r in results]))):r['p_holm']=float(p)
    round_result=test(rows,'Exploratory_round2_minus_round1','round2_time_s','round1_time_s',1,len(results))
    round_result['ci_low'],round_result['ci_high']=round_result['ci_low'];round_result['p_holm']=None
    pref_gen=sum(int(r['gen_preference_correct']) for r in rows)
    pref_role=sum(int(r['role_spec_preference_correct']) for r in rows)
    b=sum(r['gen_preference_correct']=='1' and r['role_spec_preference_correct']=='0' for r in rows)
    c=sum(r['gen_preference_correct']=='0' and r['role_spec_preference_correct']=='1' for r in rows)
    mcnemar_p=float(binomtest(min(b,c),b+c,0.5).pvalue) if b+c else 1.0
    with open(HERE/'results.csv','w',newline='',encoding='utf-8') as f:
        w=csv.DictWriter(f,fieldnames=list(results[0]));w.writeheader();w.writerows(results+[round_result])
    meta={'analysis':'paired observational within-subject survey','n':len(rows),'seed':SEED,'bootstrap_repetitions':B,'bootstrap_method':'paired participant resampling with replacement; percentile confidence interval of the Hodges-Lehmann Walsh pseudomedian','quantile_method':QUANTILE_METHOD,'wilcoxon_zero_method':'wilcox','wilcoxon_alternative':'two-sided','wilcoxon_method':'auto (SciPy; ties/zeros may cause asymptotic approximation)','wilcoxon_ties':'average ranks of absolute differences','holm_family':[x[0] for x in TESTS],'results':results,'exploratory_round':round_result,'preference':{'generic_correct':pref_gen,'role_dependent_correct':pref_role,'discordant_gen_only':b,'discordant_role_only':c,'mcnemar_exact_p':mcnemar_p}}
    with open(HERE/'results.json','w',encoding='utf-8') as f:json.dump(meta,f,indent=2,ensure_ascii=False)
    print('n',len(rows),'correct',pref_gen,pref_role,'McNemar',mcnemar_p)
    for r in results+[round_result]:print(r['test'],f"p={r['p']:.7g}",f"holm={r['p_holm']}",f"rrb={r['rrb']:.3f}",f"HL={r['hl_shift']}",f"CI=[{r['ci_low']},{r['ci_high']}]")
if __name__=='__main__':main()
