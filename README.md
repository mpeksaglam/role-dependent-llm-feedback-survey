# Role-Dependent LLM-Based Human Feedback Survey

This repository contains the source code for the web-based survey application used for data collection in the study associated with the following publication:

Saskia Hutschenreiter, Julia Berger, Maximilian Peksaglam, Rüdiger Daub\
**Design and Evaluation of a Role-Dependent LLM-Based Human Feedback Subsystem for Cognitive Robotic Task Teaching in Assembly**\
_Procedia CIRP_

The application was developed to support the experimental study by providing participants with a web-based environment in which they could interact with simulated
robotic task scenarios, use an AI-based chat assistant, and complete standardized questionnaires.

## Research Context

The study investigates how user interfaces tailored to a specific user role compare with generic interfaces in the context of cognitive robotic task teaching in assembly.

The survey application supports the data collection process by bringing the study tasks and questionnaires together in a web-based interface. Participants work through
multiple simulated robot scenarios, interact with an AI-based chat assistant, and provide feedback through standardized questionnaires.

The application was deployed using Vercel. A separate PHP backend supports session persistence and logging.

For the detailed research motivation, experimental design, and findings, please refer to the associated paper.

## Technology Stack

The application uses the following technologies:

- **Next.js** — web application framework (App Router)
- **React** — user interface
- **TypeScript** — application logic and type safety
- **Tailwind CSS** — styling
- **OpenAI API** — AI-based chat assistant functionality using GPT-5.4 mini
- **PHP** — backend functionality for session persistence and logging
- **Vercel** — deployment platform

The PHP backend is maintained separately and is not included in this repository.

## Getting Started

### Prerequisites

Before running the application locally, ensure that you have:

- Node.js and npm installed
- Access to the required API credentials
- Access to a compatible backend instance for session persistence and logging

### Installation

Clone the repository and navigate to the project directory:

```text
git clone <repository-url>
cd <repository-directory>
```

Install the dependencies:

```text
npm install
```

### Configuration

Create a `.env.local` file in the project root and configure the following environment variables:
<br>

| Variable         | Purpose                                                         |
| ---------------- | --------------------------------------------------------------- |
| `OPENAI_API_KEY` | API key for the OpenAI-powered chat assistant                   |
| `SERVER_API_URL` | URL of the PHP backend used for session persistence and logging |

<br>

Example `.env.local` file:

```dotenv
OPENAI_API_KEY=your_openai_api_key
SERVER_API_URL="https://your-backend.example.com"
```

Replace the placeholder values with your own configuration. The backend URL must point to a compatible PHP backend instance.

**Security:** Never commit actual API keys, credentials, participant information, or other sensitive data. Keep `.env.local` out of version control.

A working backend connection is required for the original data collection workflow. The availability of the chat assistant also depends on valid API credentials.

### Run Locally

Start the development server:

```text
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

Local execution also requires configuration of the external backend and API services.

## Deployment

The survey application was deployed to Vercel. The original project deployment workflow used GitLab CI/CD.

Running a local instance does not automatically reproduce the original production environment. A deployment requires the appropriate environment variables, API credentials,
backend configuration, and hosting setup.

## Research and Reproducibility

This repository provides the survey application's source code to support inspection of the software used in the study.

The source code alone may not reproduce the complete experimental environment or the original data collection process. This can depend on the availability and configuration
of external services, the separate PHP backend, and study-specific materials.

For details about the study design, methodology, and results, consult the associated paper.

## License

No explicit software license is specified in this repository. Unless a license is added by the rights holders, the code should not be assumed to be available for unrestricted
reuse or redistribution.

For questions regarding reuse, please contact the project authors or the corresponding authors of the associated publication.
