# Server (Express Backend)

This is the Express.js backend API for the MERN stack application.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-app
NODE_ENV=development
JWT_SECRET=your-secret-key-change-in-production
```

3. Start the development server:
```bash
npm run dev
```

The server will run on [http://localhost:5000](http://localhost:5000).

## Project Structure

```
server/
├── config/           # Configuration files (DB connection, etc.)
├── controllers/      # Request handlers
├── middleware/       # Custom middleware (auth, validation)
├── models/           # Mongoose models
├── routes/           # API routes
└── server.js         # Entry point
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/users` - Get all users (protected)
- `GET /api/users/:id` - Get user by ID (protected)
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user (protected)
- `DELETE /api/users/:id` - Delete user (protected)

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)
- `JWT_SECRET` - Secret for JWT token generation

## Learn More

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

