# Deployment Guide

This guide will help you deploy your MERN stack application.

## Frontend Deployment (Vercel)

### Prerequisites
- GitHub account
- Vercel account

### Steps

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect it's a Next.js project
   - Set the following environment variable:
     - `NEXT_PUBLIC_API_URL`: Your backend API URL
   - Click "Deploy"

3. **Vercel will automatically**:
   - Build your Next.js app
   - Deploy it to a global CDN
   - Provide you with a production URL

## Backend Deployment

### Option 1: Railway

1. Go to [Railway](https://railway.app)
2. Create a new project
3. Connect your GitHub repository
4. Add your environment variables:
   - `PORT`: 5000
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your secret key
5. Deploy

### Option 2: Render

1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set the build command: `cd server && npm install`
5. Set the start command: `cd server && npm start`
6. Add environment variables
7. Deploy

### Option 3: Heroku

1. Install Heroku CLI
2. Login to Heroku
3. Create a new app
4. Add MongoDB addon
5. Set environment variables
6. Deploy

```bash
heroku create your-app-name
heroku addons:create mongolab
git push heroku main
```

## MongoDB Setup

### Option 1: MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Update your `MONGODB_URI` environment variable

### Option 2: Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/mern-app`

## Environment Variables

### Frontend (Vercel)
```
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
```

### Backend
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-app
JWT_SECRET=your-super-secret-key
NODE_ENV=production
```

## Notes

- Remember to update your frontend API URL after deploying backend
- Use HTTPS URLs in production
- Keep your environment variables secure
- Never commit `.env` files to Git

