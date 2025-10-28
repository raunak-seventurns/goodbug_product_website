# Project Structure

Complete overview of the MERN stack application structure.

## Root Directory

```
/
├── client/                 # Next.js frontend
├── server/                 # Express backend
├── package.json           # Workspace configuration
├── .gitignore             # Git ignore rules
├── README.md              # Main documentation
├── QUICKSTART.md          # Quick start guide
├── DEPLOY.md              # Deployment instructions
└── vercel.json            # Vercel configuration
```

## Client (Frontend)

```
client/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── not-found.tsx      # 404 page
│   ├── about/             # About route
│   │   └── page.tsx
│   └── api-test/          # API test route
│       └── page.tsx
├── components/            # Reusable components
│   ├── Button.tsx
│   └── Card.tsx
├── lib/                   # Utilities and helpers
│   └── api.ts             # Axios API client
├── public/                # Static assets
│   └── favicon.ico
├── package.json           # Frontend dependencies
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS config
├── next.config.js         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
├── .eslintrc.json         # ESLint configuration
└── README.md              # Frontend documentation
```

## Server (Backend)

```
server/
├── config/                # Configuration files
│   └── db.js              # MongoDB connection
├── controllers/           # Request handlers
│   ├── userController.js  # User CRUD operations
│   └── authController.js  # Authentication logic
├── middleware/           # Custom middleware
│   └── authMiddleware.js  # JWT authentication
├── models/               # Mongoose models
│   └── User.js           # User model
├── routes/               # API routes
│   ├── index.js          # Main router
│   ├── users.js          # User routes
│   └── auth.js           # Auth routes
├── utils/                # Utility functions
│   └── generateToken.js  # JWT token generator
├── server.js             # Express server entry point
├── package.json          # Backend dependencies
├── nodemon.json          # Nodemon configuration
├── .gitignore            # Server git ignore
└── README.md             # Backend documentation
```

## Key Files Explained

### Frontend

- **app/layout.tsx**: Root layout wrapper for all pages
- **app/page.tsx**: Landing page
- **components/**: Reusable React components
- **lib/api.ts**: Axios instance configured for API calls
- **tailwind.config.ts**: Tailwind CSS customization

### Backend

- **server.js**: Main server file, initializes Express app
- **config/db.js**: MongoDB connection setup
- **models/User.js**: User schema with bcrypt password hashing
- **controllers/**: Handle business logic for each route
- **middleware/authMiddleware.js**: JWT token verification
- **routes/**: Define API endpoints

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API calls

### Backend
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **jsonwebtoken**: JWT authentication
- **bcryptjs**: Password hashing
- **dotenv**: Environment variable management

### Development Tools
- **Nodemon**: Auto-restart server during development
- **ESLint**: Code linting
- **TypeScript**: Type checking

## API Structure

### Authentication Flow
1. User registers/logs in → receives JWT token
2. Token stored in localStorage (frontend)
3. Token sent in Authorization header for protected routes
4. Middleware verifies token on backend

### Route Organization
- `/api/auth/*` - Authentication endpoints
- `/api/users/*` - User management endpoints
- `/api/health` - Health check endpoint

## Environment Variables

### Client (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-app
NODE_ENV=development
JWT_SECRET=your-secret-key
```

## Development Workflow

1. **Start MongoDB**: Local or use MongoDB Atlas
2. **Configure environment**: Set up .env files
3. **Install dependencies**: `npm run install:all`
4. **Run development**: `npm run dev`
5. **Make changes**: Code is hot-reloaded
6. **Test**: Use `/api-test` page to verify API

## Deployment Considerations

- Frontend: Vercel (optimized for Next.js)
- Backend: Railway, Render, or Heroku
- Database: MongoDB Atlas (cloud) or local
- Environment: Separate dev/prod configurations
- API URL: Update for production deployment

