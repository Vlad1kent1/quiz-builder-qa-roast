# Quiz Builder

## Task

Technical test assignment for the **Full-Stack JS Engineer** position. The project is a centralized platform for creating and managing custom quizzes with various question types, featuring a high-performance modular UI and a robust relational database structure.

## What was done

I developed a full-scale FullStack application with a focus on type safety, modular architecture, and a minimalist professional aesthetic.

### Backend (NestJS + Prisma + PostgreSQL)

* **CRUD Architecture**: Implemented a complete API for managing quizzes, including nested creation of questions and answers.
* **Relational Data Mapping**: Used Prisma ORM with PostgreSQL. Designed a schema that supports dynamic question types and stores custom answer configurations in a centralized `answers` array.
* **Cascade Management**: Configured database-level cascade deletes to ensure that removing a quiz automatically cleans up all associated questions and answers, maintaining database integrity.
* **Strict Validation**: All incoming data is processed through Global Validation Pipes and DTOs, ensuring that every quiz conforms to the required structure before hitting the database.

### Frontend (Next.js 15 + Tailwind CSS)

* **Arctic Mono Design**: Implemented a custom high-contrast minimalist design system. The UI follows strict monochromatic rules with sharp corners (0px rounding) and heavy typography to achieve a professional "technical" look.
* **Dynamic Form Engine**: Built an advanced quiz creation form using `react-hook-form` and `zod`. The form dynamically adjusts its input fields based on the selected question type (Boolean, Short Answer, or Multiple Choice).
* **Modular Component Structure**: Followed a strict separation of concerns. Page-specific logic is isolated into dedicated components (e.g., `quiz-editor`, `quiz-viewer`), while reusable elements (Buttons, Inputs) are kept in a shared directory.
* **State & UX Handling**: Integrated comprehensive states for `Loading` (pulse animations), `Empty` (registry empty states), and `Submission` to provide immediate user feedback.

## Core technologies

* **Next.js 15 (App Router)** & **TypeScript**
* **NestJS** & **Prisma ORM**
* **PostgreSQL** (via Supabase)
* **Tailwind CSS** (Custom "Arctic" System)
* **Axios** & **React Hook Form**

## Project structure

```text
/
├── backend/            # NestJS Server
│   ├── src/
│   │   ├── quizzes/    # Quiz & Question domain logic
│   │   ├── prisma/     # Database service configuration
│   │   └── main.ts     # Entry point (Port: 3001)
│   └── prisma/         # Schema definitions & Migrations
├── frontend/           # Next.js Client
│   ├── src/
│   │   ├── app/        # App Router & Page layouts
│   │   ├── components/ # Modular UI components
│   │   │   ├── layout/ # Components that are used in layout.tsx
│   │   │   └── shared/ # Reusable UI elements
│   │   ├── lib/        # API client & Utility functions
│   │   └── types/      # Global TypeScript interfaces
```

## Environment Variables

To run this project, create `.env` files in the following directories:

**Backend (backend/.env):**

```env
DATABASE_URL=your_postgresql_connection_string
```

## Setup Instructions

### 1. Backend

```shell
cd backend
npm install
npx prisma generate
npx prisma db push
npm run start:dev
```

The server will be running at `http://localhost:3001`.

### 2. Frontend

```shell
cd frontend
npm install
npm run dev
```

The client will be running at `http://localhost:3000`.

## API Endpoints

* `GET /quizzes` — Fetch all quizzes with title and question counts.
* `POST /quizzes` — Create a new quiz with questions and custom answer labels.
* `GET /quizzes/:id` — View full quiz details and structure.
* `DELETE /quizzes/:id` — Remove a quiz and its questions.