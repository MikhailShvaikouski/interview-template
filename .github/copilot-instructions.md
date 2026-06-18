# React + Node.js + Express Project

## Project Overview

Full-stack web application with:

- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Structure**: Monorepo with separate client and server folders
- **CodeSandbox Compatible**: Yes, fully configured for CodeSandbox

## Development Guidelines

- Frontend code is located in `/client`
- Backend code is located in `/server`
- Each folder has its own package.json and node_modules
- Frontend runs on port 5173 (Vite default)
- Backend runs on port 3001
- CORS is enabled for local development
- CodeSandbox configuration files: `.codesandbox/tasks.json` and `sandbox.config.json`

## Getting Started

### Local Development

1. Install dependencies: `npm install` in both `client` and `server` folders
2. Start backend: `cd server && npm start`
3. Start frontend: `cd client && npm run dev`
4. Access app at `http://localhost:5173`

### CodeSandbox

The project is automatically configured to run on CodeSandbox. Both the frontend and backend will start in parallel, and API requests will be automatically routed to the backend.

## Environment Detection

The app automatically detects CodeSandbox via the `CODESANDBOX_SSE` environment variable and adjusts API endpoints accordingly.
