# Quick Start Guide

Get your MERN stack application up and running in minutes!

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)

## Installation

### 1. Install All Dependencies

```bash
npm run install:all
```

This will install dependencies for:
- Root workspace
- Frontend (Next.js)
- Backend (Express)

## Configuration

### 2. Set Up Environment Variables

Create a `.env` file in the `server` directory:

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-app
NODE_ENV=development
JWT_SECRET=your-super-secret-key-change-this
```

Create a `.env.local` file in the `client` directory:

```bash
cd client
# Create .env.local file
```

Edit `client/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Running the Application

### 3. Start Development Servers

From the root directory, run:

```bash
npm run dev
```

This starts both:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

Or run them separately:

```bash
# Terminal 1 - Frontend
npm run dev:client

# Terminal 2 - Backend
npm run dev:server
```

## Testing the Setup

1. Open http://localhost:3000 in your browser
2. Click "Test API" to verify backend connection
3. Visit http://localhost:5000/api/health to check API directly

## Project Structure

```
mern-stack-app/
├── client/                 # Next.js frontend
│   ├── app/               # App Router pages
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   └── api-test/      # API test page
│   ├── components/        # Reusable components
│   ├── lib/               # Utilities
│   └── public/            # Static assets
├── server/                # Express backend
│   ├── config/           # DB configuration
│   ├── controllers/       # Request handlers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── middleware/       # Custom middleware
└── package.json          # Root workspace config
```

## Next Steps

- Create your MongoDB collection
- Add more API endpoints
- Build more pages and components
- Deploy to Vercel (see DEPLOY.md)

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is in use, either:
1. Stop the other application using that port
2. Change the port in configuration files

### MongoDB Connection Error

- Make sure MongoDB is running locally
- Check your `MONGODB_URI` in `server/.env`
- For Atlas, ensure IP whitelist includes your IP

### Module Not Found

Run `npm run install:all` again to ensure all dependencies are installed.

## API Endpoints

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Users
- `GET /api/users` - Get all users (protected)
- `GET /api/users/:id` - Get user by ID (protected)
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user (protected)
- `DELETE /api/users/:id` - Delete user (protected)

### Health
- `GET /api/health` - API health check

## Need Help?

- Check the README.md in each directory
- See DEPLOY.md for deployment instructions
- Review the code comments for implementation details

