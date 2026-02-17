# WG Kitchen API

## Overview

WG Kitchen API is a RESTful backend service built with Node.js, Express and TypeScript.

The project models a shared household (WG) cooking system where users can manage ingredients and determine which recipes can be prepared based on available ingredients.

This project was built to deepen backend knowledge beyond Backend-as-a-Service tools (e.g. Supabase) and to fully understand authentication flows, relational database design, and API architecture.

---

## Project Status

Work in Progress – Version 1

This project is being developed iteratively with a focus on clean backend architecture and production-oriented practices.

### Completed (Day 1)

- Node.js project initialized
- Express server configured
- TypeScript setup with strict mode
- Basic project structure established
- Initial test route implemented
- Repository connected to GitHub

### Currently Working On

- Professional project structure (routes, controllers, middleware, services)
- Separation of concerns in request handling

### Upcoming Milestones

- PostgreSQL integration with Prisma
- JWT-based authentication
- Relational data modeling (Users, Households, Ingredients, Recipes)
- Matching logic for ingredient-based recipe suggestions
- CI pipeline via GitHub Actions
- Continuous deployment via Railway

---

## Development Approach

This project follows a structured engineering workflow:

1. Define scope
2. Establish clean architecture
3. Implement vertical slices (Request → DB → Response)
4. Integrate CI early
5. Deploy before feature-completeness
6. Refactor and iterate

Version 1 prioritizes clarity and architectural correctness over feature breadth.

---

## Learning Goal

The goal of this project is to move from using managed backend services to designing and implementing backend systems independently.

Key focus areas:

- Implementing JWT-based authentication manually
- Designing relational database schemas
- Managing migrations with Prisma
- Structuring scalable Express applications
- Setting up CI/CD pipelines
- Deploying a production-ready backend

---

## Tech Stack

- Node.js
- Express
- TypeScript (strict mode)
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt (password hashing)
- GitHub Actions (CI)
- Railway (Continuous Deployment)

---

## Architecture

The project follows a layered structure:

- `routes/` – route definitions
- `controllers/` – request handling logic
- `services/` – business logic
- `middleware/` – authentication & error handling

The system is designed with relational data modeling in mind:

User → Household → Ingredients  
Recipes ↔ Ingredients (Many-to-Many)

---

## Authentication

- JWT-based authentication
- Password hashing with bcrypt
- Protected routes via middleware

---

## API Endpoints (Core)

### Auth

POST `/auth/register`  
POST `/auth/login`

### Ingredients

GET `/ingredients`  
POST `/ingredients`  
DELETE `/ingredients/:id`

### Recipes

POST `/recipes`  
GET `/recipes`  
POST `/recipes/match`

---

## CI/CD

### Continuous Integration

- GitHub Actions
- Automatic build validation on push

### Continuous Deployment

- Automatic deployment via Railway
- Deployment triggered on push to `main`

---

## Local Setup

```bash
npm install
npx prisma migrate dev
npm run dev
```

---

## Future Improvements

- Favorites feature
- Shopping list generator
- Weekly meal planning
- Extended testing coverage
- Docker support
