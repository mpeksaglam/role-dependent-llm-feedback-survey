# Statistical reproduction protocol and results

## Statistical population and scoring

19 analyzed participants (12 robotics-group, 7 process-group); the 29 original logs contained 10 excluded incomplete cases. The 18 end-of-survey comparisons are summarized in the manuscript. Item scoring and exclusions are described in S1 and `exclusion\\\_summary.csv`.

## Reproducible inferential conventions

* Each test is **within participant, paired, two-sided**. For condition comparisons the sign is **role-dependent minus generic**. Rating contrasts compare **annotated efficient minus inefficient**; the exploratory round effect compares **round 2 minus round 1**.
* Pre-rank differences are rounded to original response-scale units (SUS 2.5; NASA-TLX 10/6; role-fit 0.2; timings 1 second; counts/ratings integers), avoiding pseudo-ranks from floating-point roundoff.
* Wilcoxon: SciPy `wilcoxon(alternative="two-sided", zero\\\_method="wilcox", method="auto")`; zero paired differences removed, nonzero absolute ranks averaged if tied. SciPy uses an approximation for some ties/zeros. Effect size is matched-pairs rank-biserial correlation `(W+−W−)/(W++W−)` using nonzero absolute ranks.
* Paired Hodges–Lehmann location shift is the **Walsh pseudomedian**, i.e. the median of all `(d\\\_i+d\\\_j)/2` for `i<=j`, not simply the median of pair differences.
* **Bootstrap**: `B=20,000` paired participant resamples with replacement, retaining entire observed difference vectors; independent NumPy PCG64 generators initialized with seeds `20261112 + test\\\_index`. The 2.5th and 97.5th percentiles of bootstrap HL pseudomedians are the **95% percentile interval**, computed via NumPy `percentile(..., method="linear")`. Small-n, discrete and highly tied scores make percentile intervals approximate descriptive uncertainty intervals; they are not exact coverage guarantees.
* **Multiplicity**: Holm step-down adjustment over exactly seven main Wilcoxon contrasts; the exploratory round comparison is excluded.

## Results

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

## Binary preference

* Annotated efficient motion selected correctly: generic 18/19, role-dependent 16/19.
* Discordant pairs: generic-only correct 2; role-dependent-only correct 0. Exact two-sided McNemar p=0.500.

## Programmatic verification

Run `python analysis.py` and check `results.csv` and `results.json`; compare the seven rows in the table above. Dependencies are pinned in `requirements.txt`. The preconstructed numeric analysis dataset contains no names or verbatim Responses.

