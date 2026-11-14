# Supplementary materials

**Design and Evaluation of a Role-Dependent LLM-Based Human Feedback Subsystem for Cognitive Robotic Task Teaching in Assembly**



## Folders

1. `S1\_study\_protocol`: study design, measured constructs, scoring, exclusions
2. `S2\_stimuli`: ground-truth annotations, per-round allocations, illustrative static image
3. `S3\_llm\_implementation`: runtime/model description and pointers to the existing public source repository (code not duplicated)
4. `S4\_interpretation\_fidelity`: nonidentifying coding of 38 first LLM responses, coding rules
5. `S5\_statistical\_reproduction`: nonidentifying per-case analysis dataset, analysis Python source, pinned dependencies, output values and exclusion counts
6. `S6\_interface\_documentation`: author-provided screenshots of the experiment

## Reproduce statistics

```bash
cd S5\_statistical\_reproduction
python -m pip install -r requirements.txt
python analysis.py
```



