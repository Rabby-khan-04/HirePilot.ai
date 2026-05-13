# HirePilot AI

> AI-powered career preparation platform for developers

HirePilot AI helps developers upload resumes, analyze them against real job descriptions, detect skill gaps, generate interview questions, and follow personalized learning roadmaps — all in one guided AI workflow.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Product Flow](#product-flow)
- [Public Pages](#public-pages)
- [Dashboard Pages](#dashboard-pages)
- [Tech Stack](#tech-stack)
- [Core Data Models](#core-data-models)
- [API Highlights](#api-highlights)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Development Workflow](#development-workflow)
- [Design Principles](#design-principles)
- [Why HirePilot AI Is Different](#why-hirepilot-ai-is-different)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Overview

HirePilot AI is a full-stack SaaS product that turns career preparation into a guided workflow. Instead of manually guessing what to improve, users upload a resume, add a target job profile, generate an AI-powered analysis, and follow a personalized learning roadmap.

The product is designed to feel like a real modern SaaS platform, with:

- A polished public website
- Authenticated dashboard pages
- Workflow-driven career analysis
- AI-generated insights and interview questions
- Progress tracking and roadmap completion

Built for developers who want a clearer path to stronger resumes, better interviews, and smarter learning.

---

## Key Features

### 1. AI Resume Parsing

Upload a resume and HirePilot AI extracts skills, experience, projects, and raw text. Processing status is tracked across four states: `pending`, `processing`, `completed`, and `failed`.

### 2. Job Profile Intelligence

Define a target role by pasting a real job description or generating a mock one with AI. The platform extracts technical skills, soft skills, experience level, and keywords.

### 3. AI Analysis Engine

Compares a resume against a job profile and generates:

- Match score
- Matched skills
- Skill gaps with severity levels
- Improvement suggestions
- Technical and behavioral interview questions

### 4. Learning Roadmap Generator

Creates a personalized roadmap with week-by-week plans, daily tasks, resources, and real-time progress tracking. Users can mark tasks complete as they go.

### 5. Dashboard Insights

A career command center showing total resumes, latest resume strength, average analysis score, best result, roadmap progress, interview readiness, and active focus areas.

### 6. Interview Preparation Workspace

Review AI-generated technical and behavioral questions alongside the intent behind each question and suggested answers.

### 7. Modern SaaS UX

Clean dark UI, card-based layouts, smooth transitions, workflow steppers, searchable and filterable lists, pagination, and fully responsive layouts.

---

## Product Flow

The core user journey is intentionally simple and guided:

1. Sign up or sign in
2. Upload a resume
3. Add a job profile
4. Generate AI analysis
5. Review match score and suggestions
6. Generate a learning roadmap
7. Track progress and complete tasks
8. Prepare for interviews

---

## Public Pages

### Landing Page

Hero, capabilities, AI analysis preview, interview prep preview, roadmap preview, testimonials, pricing, FAQ, and CTA sections.

### About Page

Why HirePilot AI exists, what problem it solves, who it is for, and what makes it different from a typical resume tool.

### Contact Page

Support information, feature request options, business inquiry form, FAQ preview, and trust and privacy content.

### Demo Page

A public showcase of sample resume analysis, skill gap detection, interview questions, and roadmap preview — designed to show value before signup.

### Authentication Pages

- Login
- Register

---

## Dashboard Pages

| Page                    | Description                                                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Dashboard**           | Career command center with resume stats, analysis performance, roadmap progress, AI insights, and quick actions |
| **Career Analysis**     | Guided workflow for resume upload, job profile input, analysis generation, and roadmap creation                 |
| **Resume Management**   | List, filter, search, and manage uploaded resumes with parsing status                                           |
| **Job Profiles**        | Manage job roles and descriptions used for analysis                                                             |
| **AI Analyses**         | Paginated list of past analysis reports with match scores, skill gaps, and question counts                      |
| **AI Analysis Details** | Full report with matched skills, gaps, suggestions, and interview questions                                     |
| **Learning Roadmaps**   | Browse, search, filter, and sort generated roadmaps with progress summaries                                     |
| **Roadmap Details**     | Week-by-week plan with task completion, progress tracking, and sticky analytics panel                           |

---

## Tech Stack

### Frontend

- Next.js
- React 19
- Javascript
- Tailwind CSS v4
- Recharts / chart-ready UI patterns

### Backend

- Node.js + Express.js
- TypeScript
- MongoDB + Mongoose
- Zod validation
- JWT Authentication

### AI

- `@google/genai` (Gemini)
- Powers: resume parsing, job description extraction, analysis generation, roadmap generation, interview question generation

---

## Core Data Models

**Resume** — `title`, `fileUrl`, `rawText`, `parsedData`, `processingStatus`, `isLatest`

**Job Profile** — `title`, `jobDescription`, `isAiGeneratedDescription`, `extractedData`

**AI Analysis** — `score`, `matchedSkills`, `skillGaps`, `suggestions`, `technicalQuestions`, `behavioralQuestions`

**Learning Roadmap** — `title`, `duration`, `roadmap`, `progress`, task completion state

---

## API Highlights

### Resume APIs

`create` · `retry parsing` · `get list` · `get single` · `delete`

### Job Profile APIs

`create` · `get list` · `get single`

### AI Analysis APIs

`generate` · `get list with pagination` · `get single` · `delete`

### Roadmap APIs

`generate` · `get list` · `get single` · `toggle task completion` · `delete`

### Dashboard APIs

Summary stats for resumes, analyses, and roadmaps.

---

## Getting Started

### Prerequisites

- Node.js
- npm or pnpm
- MongoDB database
- Gemini API key

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## Environment Variables

Create a `.env` file in the root:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_CLOUD_NAME=cloudinaruy_cloud_name
```

---

## Development Workflow

Build the product in this order for the cleanest foundation:

1. **Authentication** — login, register, logout, token refresh
2. **Resume System** — upload, parsing, AI extraction
3. **Job Profile System** — role definition, requirement extraction
4. **AI Analysis Engine** — comparison, scoring, gap detection
5. **Roadmap Generator** — weekly plans, task tracking
6. **Dashboard & Analytics** — summaries, charts, progress views
7. **Polished UI/UX** — premium SaaS styling and responsiveness

---

## Design Principles

### Visual Style

Dark modern interface, clean gradients, subtle glow accents, rounded cards, spacious layouts, and premium typography hierarchy.

### UX Principles

Reduce friction, guide users step by step, show progress clearly, keep the interface scannable, and prioritize action-oriented content.

### Product Thinking

The app is structured like a career command center, not a simple form-based tool.

---

## Why HirePilot AI Is Different

Most tools do one thing — format resumes, list interview questions, or show generic job advice.

HirePilot AI combines everything into one guided AI workflow:

- Understands the resume
- Understands the target role
- Compares both intelligently
- Shows gaps clearly
- Builds an actionable roadmap
- Tracks progress over time

This makes the product feel more like a career assistant than a static utility.

---

## Future Enhancements

- PDF resume preview
- Resume versioning
- Chart-driven dashboard expansion
- Notes per roadmap task
- Export analysis as PDF
- Shareable analysis reports
- Interview practice mode with answer scoring
- Notifications and reminders
- Public career insight blog

---

## License

Add your preferred license here.

---

> HirePilot AI turns resumes into insights, insights into structure, structure into action, and action into progress.

## Access

```env
Admin
email: ajrabbyk72@gmail.com
password: $Rabby12345
```

## NOTE: I’ve restricted certain admin features because this access is being shared publicly.
