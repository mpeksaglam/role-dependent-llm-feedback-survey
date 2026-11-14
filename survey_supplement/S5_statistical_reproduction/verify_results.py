"""Independent deterministic regression check against precomputed numeric expectations."""
import json, subprocess,sys,math
from pathlib import Path
p=Path(__file__).resolve().parent
subprocess.run([sys.executable,str(p/'analysis.py')],cwd=p,check=True,stdout=subprocess.PIPE)
a=json.loads((p/'results.json').read_text())
assert a['n']==19
assert len(a['results'])==7
assert (a['preference']['generic_correct'],a['preference']['role_dependent_correct'])==(18,16)
expect={
'SUS':(.2589383,-1.25,-5.0,1.25),
'NASA_TLX':(.4804587,0.,-0.8333333333333334,2.5),
'Role_fit':(.8985582,0.,-.2,.2),
'Completion_time_seconds':(.01958092,71.,16.,131.5),
'Correction_user_turns':(.725721,0.,-.5,.5),
'Generic_perceived_success_efficient_minus_inefficient':(.0482622,1.,0.,1.5),
'Role_specific_efficiency_or_motion_quality_efficient_minus_inefficient':(.0001125085,2.5,2.,3.)}
for v in a['results']:
 t=expect[v['test']]
 for name,target in zip(['p','hl_shift','ci_low','ci_high'],t):
  assert math.isclose(v[name],target,rel_tol=1e-5,abs_tol=1e-7),(v['test'],name,v[name],target)
assert math.isclose(a['exploratory_round']['ci_high'],-41.25)
print('PASS: all seven paired tests, 20,000-resample HL intervals, Holm family, McNemar preference counts and exploratory round CI')
