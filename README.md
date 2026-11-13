# Role-Dependent LLM-Based Human Feedback Survey

**You are viewing the `main` branch.**

This branch contains the original version of the application used during the data collection phase of the study. It preserves the original study implementation, including participant condition assignment, session persistence, event logging, and backend integration.

For a simplified, locally runnable version intended for demonstration purposes, please switch to the [demo branch](../../tree/demo).

---

This repository contains the source code for the web-based survey application used for data collection in the study associated with the following publication:

Saskia Hutschenreiter, Julia Berger, Maximilian Peksaglam, Rüdiger Daub\
**Design and Evaluation of a Role-Dependent LLM-Based Human Feedback Subsystem for Cognitive Robotic Task Teaching in Assembly**\
_Procedia CIRP_

The application was developed to support the experimental study by providing participants with a web-based environment in which they could interact with simulated
robotic task scenarios, use an AI-based chat assistant, and complete standardized questionnaires.

## Research Context

The study investigated how user interfaces tailored to specific user roles compare with generic interfaces in the context of cognitive robotic task teaching in assembly.

The survey application brought the study tasks and questionnaires together in a web-based interface. Participants worked through
multiple simulated robot scenarios, interacted with an AI-based chat assistant, and provided feedback through standardized questionnaires.

For the detailed research motivation, experimental design, and findings, please refer to the associated paper.

## Technology Stack

The application uses the following technologies:

- **Next.js** — web application framework (App Router)
- **React** — user interface library
- **TypeScript** — application logic and type safety
- **Node.js** — JavaScript runtime environment
- **Tailwind CSS** — styling
- **OpenAI API** — AI-based chat assistant functionality using the official OpenAI Node.js SDK (GPT-5.4 mini)
- **Vercel** — frontend deployment platform
- **PHP** — backend functionality for participant condition assignment, session persistence, and event logging
- **Apache** — backend hosting environment

## Project Structure

The repository contains the Next.js frontend in `src/`, the PHP backend in `backend/`, the chat assistant system prompts used by the application in `system_prompts/`, and the simulated assembly tasks evaluated by participants in `public/`.

### PHP Backend

The PHP backend is included to document the implementation used during the study. It was hosted separately from the frontend on an Apache server and used file-based storage rather than a database.

The `api/` directory contains the PHP scripts responsible for participant condition assignment, session loading and saving, and event logging. The `data/` directory contains the storage locations for participant condition assignments, session data, and event logs.

## Getting Started

### Prerequisites

- Node.js and npm
- PHP backend instance with file system read/write access
- OpenAI API key (optional, required for the chat assistant)

### Installation

Clone the repository, navigate to the project directory, and install the dependencies:

```bash
npm install
```

### Configuration

Create a `.env.local` file in the project root:

```dotenv
OPENAI_API_KEY=your_openai_api_key
SERVER_API_URL="https://your-backend.example.com"
```

Do not commit actual API keys, credentials, participant information, or other sensitive data. Keep `.env.local` out of version control.

### Run Locally

Start the development server:

```bash
npm run dev
```

The application is then available at `http://localhost:3000`.

Local execution also requires configuration of the external backend and API services.

## Deployment

In the original implementation, the frontend was deployed to Vercel, while the PHP backend was hosted separately on an Apache server. The original project deployment workflow used GitLab CI/CD.

The original frontend deployment is no longer active. The backend source code is included for documentation purposes.

## Research and Reproducibility

This repository provides the frontend and backend source code to support inspection of the software used in the study.

The source code alone may not reproduce the complete experimental environment or the original data collection process. This can depend on the availability and configuration
of external services, hosting infrastructure, and study-specific materials.

For details about the study design, methodology, and results, consult the associated paper.

## License

No explicit software license is specified in this repository. Unless a license is added by the rights holders, the code should not be assumed to be available for unrestricted
reuse or redistribution.

For questions regarding reuse, please contact the project authors or the corresponding authors of the associated publication.
