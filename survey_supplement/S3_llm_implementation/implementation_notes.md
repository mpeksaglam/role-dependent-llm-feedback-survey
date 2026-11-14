# S3. LLM implementation and interfaces

The authors confirm the deployed implementation corresponds to the published repository state at study completion:
https://github.com/mpeksaglam/role-dependent-llm-feedback-survey/

* Model: `gpt-5.4-mini-2026-03-17` (OpenAI GPT-5.4 mini snapshot).
* API: OpenAI Responses API.
* Client: OpenAI Node.js SDK v6.45.0.
* Prompt selection: scenario- and role-dependent prompt with current ratings and preceding chat messages.
* The prompt requests JSON output
* Feedback schema in the paper also includes conceptual downstream fields not experimentally exercised; do not conflate formal model and realized validated outputs.

Code and study prompts are maintained in `src/`, `backend/` and `system\\\_prompts/` within the GitHub repository. For traceability use a fixed commit hash or archived release URL in the final submission if available. The empirical interpretation study is documented in S4. The software application uses external hosted services; reproducing its historical runtime environment may require additional infrastructure not supplied here.

