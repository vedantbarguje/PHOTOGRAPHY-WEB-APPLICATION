# Setup Instructions to Fix Errors

## Issue 1: MongoDB Authentication Error - FIXED ✅

The MongoDB connection has been updated. Now you need to update your backend `.env` file:

### Steps:

1. **Open** `backend/.env` file (currently open in your editor)

2. **Replace the MONGODB_URI line** with:
   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/photography_booking
   ```

3. **Make sure MongoDB is running**:
   - Windows: Open MongoDB Compass or start MongoDB service
   - Command: `mongod` (in a separate terminal)
   - Or install MongoDB if not already installed: https://www.mongodb.com/try/download/community

## Issue 2: React Dev Server Configuration Error - FIXED ✅

Created `frontend/.env` file with proper webpack dev server configuration.

## Quick Start Commands

### Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

## If MongoDB Connection Still Fails

### Option 1: Install MongoDB Locally
Download and install MongoDB Community Edition:
https://www.mongodb.com/try/download/community

### Option 2: Use MongoDB Atlas (Cloud)
1. Create free account: https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `backend/.env` with:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/photography_booking?retryWrites=true&w=majority
   ```

### Option 3: Use MongoDB in Docker
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## Verify Everything Works

1. Backend should show: `MongoDB Connected: 127.0.0.1`
2. Frontend should open at: `http://localhost:3000`
3. No errors in either terminal

## Next Steps

1. Update your `backend/.env` file with the correct MONGODB_URI
2. Make sure MongoDB is running
3. Restart the backend: `npm run dev`
4. Start the frontend: `npm start`
5. Access the app at `http://localhost:3000`
