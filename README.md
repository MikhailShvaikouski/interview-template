# React + Node.js + Express App

A full-stack web application with React frontend and Express backend. Fully compatible with CodeSandbox!

## Project Structure

```
.
├── .codesandbox/          # CodeSandbox configuration
├── client/                 # React frontend (Vite)
│   ├── public/            # Static assets
│   ├── src/               # React components and logic
│   └── package.json
├── server/                # Node.js + Express backend
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── server.js          # Server entry point
│   └── package.json
├── sandbox.config.json    # CodeSandbox config
└── README.md
```

## Prerequisites

- Node.js (v16+)
- npm or yarn

## Installation

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd client
npm install
```

## Running the Application

### Local Development

#### Start Backend Server

```bash
cd server
npm start
```

The API server will run on `http://localhost:3001`

#### Start Frontend Development Server

```bash
cd client
npm run dev
```

The React app will run on `http://localhost:5173`

### CodeSandbox

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/your-username/interview-temp-task)

On CodeSandbox, both the server and client will start automatically. The frontend will proxy API requests to the backend automatically.

## Available Scripts

### Backend (`server/`)

- `npm start` - Start the Express server
- `npm run dev` - Start server with nodemon (auto-reload on file changes)

### Frontend (`client/`)

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Routes

Base URL (Local): `http://localhost:3001/api`
Base URL (CodeSandbox): `https://3001-<sandbox-hash>.<region>.codesandbox.io/api`

### Available Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/data` - Get sample data

## Environment Variables

Create `.env` files in `server/` and `client/` directories if needed.

**Example `server/.env`:**

```
PORT=3001
NODE_ENV=development
```

## How It Works

The application automatically detects if it's running in CodeSandbox via the `CODESANDBOX_SSE` environment variable and adjusts the API endpoints accordingly. This allows the same code to work both locally and on CodeSandbox.

## Technologies

- **Frontend**: React 18, Vite, JavaScript/JSX
- **Backend**: Node.js, Express
- **Styling**: CSS

## License

MIT
