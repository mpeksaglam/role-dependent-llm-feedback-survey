# Supplementary Materials — Consolidated Overview

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

## Contents

- [S1. Study protocol and design](#s1-study-protocol-and-design)
- [S2. Stimulus documentation](#s2-stimulus-documentation)
- [S3. LLM implementation and interfaces](#s3-llm-implementation-and-interfaces)
- [S4. Interpretation-fidelity audit — coding rules](#s4-interpretation-fidelity-audit--coding-rules)
- [Statistical reproduction protocol and results](#s5-statistical-reproduction-protocol-and-results)
- [S6. Original survey interface screenshots](#s6-original-survey-interface-screenshots)

---

## S1. Study protocol and design

### Research objective

Evaluation of a role-dependent, LLM-mediated feedback-acquisition subsystem for simulated robot-assisted assembly. Both conditions use the same three feedback tasks; criteria and wording differ by assigned expertise role.

### Assembly use case

The study context is positioning and screw-fastening a bumper on a chassis. The simulated workstation includes a UR5e, a screw-driving end effector, automated screw feeder, and holding fixture (jig). The videos show robot motion. The original task-description screen is preserved in S6.

### Conditions and participant order

* Generic: neutral wording and ratings of task success and safety.
* Role-dependent, process: feasibility / task success, execution efficiency, assembly-context safety.
* Role-dependent, robotics: TCP target accuracy, motion quality, technical safety.
* The within-subject study included 19 analyzable cases, 12 robotics-group and 7 process-group; role-dependent first n=16, generic first n=3.
* Group assignment in the observed data is consistent with a self-reported robotics/cobot experience threshold >=3 on a five-point item. This was not independently verified as occupational expertise.
* Thirteen participants explicitly gave a professional research/academic background; six stated technical fields/functions.

### Study sequence

1. Information, consent and pre-survey (background, production/assembly, robotics, simulations, AI experience).
2. Training task covering video playback, rating, selection and feedback chat; excluded from evaluation.
3. First round: task S1 assess and accept/reject a motion with ratings; S2 enter corrective free text and review LLM interpretation; S3 prefer between two motion variants and rate each. Completion times logged.
4. Post-condition questionnaire: SUS (10 items), NASA-TLX (6), role fit (5).
5. Second round with the alternative interface, same three types of tasks but different round-specific stimulus videos; post-condition questionnaire repeated.
6. Final retrospective comparison and modality-preference survey (n=18 completed).

### Measurement and scoring

* SUS: standard 0–100 score, positive items (response -1), negative items (5-response), multiplied by 2.5.
* Unweighted NASA-TLX: six 11-point responses converted to 0–100; performance / satisfaction item reversed, then arithmetic mean. Distinguish from the standard weighted TLX.
* Role fit: five 1–5 responses averaged, item about requiring unnecessary expert knowledge reverse coded.
* Completion time: sum of recorded scenario durations for each block (three scenarios), not total survey time.
* Correction turns: number of user chat entries in S2.
* Preference correctness: selection of an a priori annotated more efficient motion in S3, assessed within rounds.
* Efficient-versus-inefficient ratings: within S3, generic uses perceived task success; role-dependent uses process efficiency for process-group and motion quality for robotics-group.

### Exclusion and confounding

From 29 raw log files, 19 records completed both three-scenario blocks and both post-condition questionnaires. The remaining 10 incomplete records were excluded. For repeated questionnaire completions the final complete event was selected. Original data are not included in the public package. Condition and round are strongly confounded by order imbalance and nonidentical stimuli; estimates are descriptive/exploratory and cannot isolate causal interface effects.

### Source documents

The complete original question wording and interfaces are documented in the final survey screenshots in S6. The source application is accessible at https://github.com/mpeksaglam/role-dependent-llm-feedback-survey/ (verified unchanged by the study authors since study completion).

---

## S2. Stimulus documentation

Seven unique robot-motion videos were used across six task presentations per participant. All seven reached the intended goal. Four were annotated efficient (videos 3, 4, 5, 6), and three inefficient (videos 1, 2, 7). Video 4 was presented twice, in R1.2 and R2.3-B. The mapping in `stimulus\\\_annotations.csv` has eight rows because one video is reused.

* Round 1, scenario 1: video 3 (efficient), scenario 2: video 4 (efficient), scenario 3: video 5 (A efficient) against video 7 (B inefficient).
* Round 2, scenario 1: video 6 (efficient), scenario 2: video 2 (inefficient), scenario 3: video 1 (A inefficient) against video 4 (B efficient).

The comparative *relative* efficiency annotation is suitable for S3 pairwise decisions; binary task-success classification is not discriminative because all goals were met.

---

## S3. LLM implementation and interfaces

The authors confirm the deployed implementation corresponds to the published repository state at study completion:
https://github.com/mpeksaglam/role-dependent-llm-feedback-survey/

* Model: `gpt-5.4-mini-2026-03-17` (OpenAI GPT-5.4 mini snapshot).
* API: OpenAI Responses API.
* Client: OpenAI Node.js SDK v6.45.0.
* Prompt selection: scenario- and role-dependent prompt with current ratings and preceding chat messages.
* The prompt requests JSON output
* Feedback schema in the paper also includes conceptual downstream fields not experimentally exercised; do not conflate formal model and realized validated outputs.

Code and study prompts are maintained in `src/`, `backend/` and `system\\\_prompts/` within the GitHub repository. For traceability use a fixed commit hash or archived release URL in the final submission if available. The empirical interpretation study is documented in S4. The software application uses external hosted services; reproducing its historical runtime environment may require additional infrastructure not supplied here.

---

## S4. Interpretation-fidelity audit — coding rules

38 first interpretations (19 participants × 2 conditions) were examined. The associated public file intentionally excludes the original free-text and model-generated natural-language replies, which may be indirectly identifying in a small sample.

* `explicit\\\_confirmation`: explicit affirmative first follow-up.
* `no\\\_followup`: no further recorded user message after the first model interpretation; not proof of affirmative acceptance.
* `clarification\\\_or\\\_extension`: later user input adds context or a new concern but does not demonstrably reverse the first interpretation.
* `semantic\\\_correction`: documented reversal/misrepresentation of a substantive intended meaning, notably the sign/direction of a TCP position correction.
* `additional\\\_review\\\_flag`: cases for possible unsupported content or later independent issues, not necessarily confirmed misinterpretations.

Observed outcome counts: generic explicit confirmation 8, no follow-up 8, clarification/extension 3, semantic correction 0; role-dependent explicit confirmation 7, no follow-up 10, clarification/extension 1, semantic correction 1. Thus 16/19 and 17/19 had no substantive follow-up (exact paired McNemar p=1.0). One clear documented semantic correction among 38 first responses gives 1/38 (2.63%), Clopper–Pearson 95% CI about 0.07–13.81%.

This is single-rater qualitative coding. Linking these cases to the S5 numerical dataset is intentionally disabled because participant pseudonyms are different across the two files.

---

## Statistical reproduction protocol and results

### Statistical population and scoring

19 analyzed participants (12 robotics-group, 7 process-group); the 29 original logs contained 10 excluded incomplete cases. The 18 end-of-survey comparisons are summarized in the manuscript. Item scoring and exclusions are described in S1 and `exclusion\\\_summary.csv`.

### Reproducible inferential conventions

* Each test is **within participant, paired, two-sided**. For condition comparisons the sign is **role-dependent minus generic**. Rating contrasts compare **annotated efficient minus inefficient**; the exploratory round effect compares **round 2 minus round 1**.
* Pre-rank differences are rounded to original response-scale units (SUS 2.5; NASA-TLX 10/6; role-fit 0.2; timings 1 second; counts/ratings integers), avoiding pseudo-ranks from floating-point roundoff.
* Wilcoxon: SciPy `wilcoxon(alternative="two-sided", zero\\\_method="wilcox", method="auto")`; zero paired differences removed, nonzero absolute ranks averaged if tied. SciPy uses an approximation for some ties/zeros. Effect size is matched-pairs rank-biserial correlation `(W+−W−)/(W++W−)` using nonzero absolute ranks.
* Paired Hodges–Lehmann location shift is the **Walsh pseudomedian**, i.e. the median of all `(d\\\_i+d\\\_j)/2` for `i<=j`, not simply the median of pair differences.
* **Bootstrap**: `B=20,000` paired participant resamples with replacement, retaining entire observed difference vectors; independent NumPy PCG64 generators initialized with seeds `20261112 + test\\\_index`. The 2.5th and 97.5th percentiles of bootstrap HL pseudomedians are the **95% percentile interval**, computed via NumPy `percentile(..., method="linear")`. Small-n, discrete and highly tied scores make percentile intervals approximate descriptive uncertainty intervals; they are not exact coverage guarantees.
* **Multiplicity**: Holm step-down adjustment over exactly seven main Wilcoxon contrasts; the exploratory round comparison is excluded.

### Results

|Comparison (A − B)|HL shift|Bootstrap 95% CI|Wilcoxon p|Holm p|r\_rb|
|-|-:|-:|-:|-:|-:|
|SUS|-1.25|\[-5; 1.25]|0.25894|1|-0.352|
|NASA TLX|0|\[-0.83333; 2.5]|0.48046|1|0.220|
|Role fit|0|\[-0.2; 0.2]|0.89856|1|-0.038|
|Completion time seconds|71|\[16; 131.5]|0.01958|0.11749|0.611|
|Correction user turns|0|\[-0.5; 0.5]|0.72572|1|0.143|
|Generic perceived success efficient minus inefficient|1|\[0; 1.5]|0.04826|0.24131|0.551|
|Role specific efficiency or motion quality efficient minus inefficient|2.5|\[2; 3]|0.00011|0.00079|1.000|
|Exploratory round2 minus round1|-82.25|\[-136; -41.25]|0.0031|n/a|-0.774|

### Binary preference

* Annotated efficient motion selected correctly: generic 18/19, role-dependent 16/19.
* Discordant pairs: generic-only correct 2; role-dependent-only correct 0. Exact two-sided McNemar p=0.500.

### Programmatic verification

Run `python analysis.py` and check `results.csv` and `results.json`; compare the seven rows in the table above. Dependencies are pinned in `requirements.txt`. The preconstructed numeric analysis dataset contains no names or verbatim Responses.

---

## S6. Original survey interface screenshots

The screenshots were supplied by the study authors and represent the final survey implementation. They cover the experience survey, use-case introduction, training task, generic and role-specific motion assessment, correction chat, preference task, questionnaires after each round, and the final comparison.

The screenshots show the reference user interface with German item wording. Any public redistribution of images and embedded third-party visual material is subject to author rights clearance.

## Source files

This consolidated document reproduces the provided Markdown content, grouped by supplement section. File references point to the accompanying supplement package; the referenced datasets, code, images, and videos are not embedded in this Markdown file.

- `README(1).md`
- `study_protocol.md`
- `stimulus_protocol.md`
- `implementation_notes.md`
- `coding_guidelines.md`
- `STATISTICAL_METHODS_AND_RESULTS.md`
- `README.md`
