# S1. Study protocol and design

## Research objective

Evaluation of a role-dependent, LLM-mediated feedback-acquisition subsystem for simulated robot-assisted assembly. Both conditions use the same three feedback tasks; criteria and wording differ by assigned expertise role.

## Assembly use case

The study context is positioning and screw-fastening a bumper on a chassis. The simulated workstation includes a UR5e, a screw-driving end effector, automated screw feeder, and holding fixture (jig). The videos show robot motion. The original task-description screen is preserved in S6.

## Conditions and participant order

* Generic: neutral wording and ratings of task success and safety.
* Role-dependent, process: feasibility / task success, execution efficiency, assembly-context safety.
* Role-dependent, robotics: TCP target accuracy, motion quality, technical safety.
* The within-subject study included 19 analyzable cases, 12 robotics-group and 7 process-group; role-dependent first n=16, generic first n=3.
* Group assignment in the observed data is consistent with a self-reported robotics/cobot experience threshold >=3 on a five-point item. This was not independently verified as occupational expertise.
* Thirteen participants explicitly gave a professional research/academic background; six stated technical fields/functions.

## Study sequence

1. Information, consent and pre-survey (background, production/assembly, robotics, simulations, AI experience).
2. Training task covering video playback, rating, selection and feedback chat; excluded from evaluation.
3. First round: task S1 assess and accept/reject a motion with ratings; S2 enter corrective free text and review LLM interpretation; S3 prefer between two motion variants and rate each. Completion times logged.
4. Post-condition questionnaire: SUS (10 items), NASA-TLX (6), role fit (5).
5. Second round with the alternative interface, same three types of tasks but different round-specific stimulus videos; post-condition questionnaire repeated.
6. Final retrospective comparison and modality-preference survey (n=18 completed).

## Measurement and scoring

* SUS: standard 0–100 score, positive items (response -1), negative items (5-response), multiplied by 2.5.
* Unweighted NASA-TLX: six 11-point responses converted to 0–100; performance / satisfaction item reversed, then arithmetic mean. Distinguish from the standard weighted TLX.
* Role fit: five 1–5 responses averaged, item about requiring unnecessary expert knowledge reverse coded.
* Completion time: sum of recorded scenario durations for each block (three scenarios), not total survey time.
* Correction turns: number of user chat entries in S2.
* Preference correctness: selection of an a priori annotated more efficient motion in S3, assessed within rounds.
* Efficient-versus-inefficient ratings: within S3, generic uses perceived task success; role-dependent uses process efficiency for process-group and motion quality for robotics-group.

## Exclusion and confounding

From 29 raw log files, 19 records completed both three-scenario blocks and both post-condition questionnaires. The remaining 10 incomplete records were excluded. For repeated questionnaire completions the final complete event was selected. Original data are not included in the public package. Condition and round are strongly confounded by order imbalance and nonidentical stimuli; estimates are descriptive/exploratory and cannot isolate causal interface effects.

## Source documents

The complete original question wording and interfaces are documented in the final survey screenshots in S6. The source application is accessible at https://github.com/mpeksaglam/role-dependent-llm-feedback-survey/ (verified unchanged by the study authors since study completion).

