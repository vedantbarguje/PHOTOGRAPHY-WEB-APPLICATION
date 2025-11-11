# Photography Booking and Management System

A professional full-stack web application for photography booking and management built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features separate admin and user panels with complete CRUD operations and a modern, attractive UI.

## 🌟 Features

### User Panel
- **User Authentication**: Secure registration and login system with JWT
- **Dashboard**: Overview of bookings, packages, and statistics
- **Booking Management**: Create, view, and delete photography bookings
- **Package Browsing**: View available photography packages with pricing
- **Gallery**: Browse photography portfolio by category
- **Profile Management**: View and manage user profile

### Admin Panel
- **Admin Dashboard**: Comprehensive overview with statistics and analytics
- **Booking Management**: View all bookings, update status, and manage appointments
- **Package Management**: Full CRUD operations for photography packages
- **Gallery Management**: Add, edit, and delete portfolio images
- **User Management**: View all users, manage roles, and user permissions
- **Real-time Updates**: Live status updates and notifications

## 🎨 UI/UX Features
- Modern, responsive design with Tailwind CSS
- Beautiful gradient color schemes
- Smooth animations and transitions
- Intuitive navigation with sidebars
- Toast notifications for user feedback
- Mobile-friendly interface
- Card-based layouts with hover effects
- Professional icons from Lucide React

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React.js** - JavaScript library for UI
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)
- Git (optional)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "full stack project"
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Configure environment variables:
- Copy `.env.example` to `.env`
- Update the `.env` file with your MongoDB URI and JWT secret

```env
MONGODB_URI=mongodb://localhost:27017/photography_booking
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

Start the backend server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the React development server:
```bash
npm start
```

The frontend application will run on `http://localhost:3000`

## 📊 Database Setup

### Using Local MongoDB

1. Make sure MongoDB is installed and running on your system
2. The application will automatically create the database on first run
3. Default MongoDB URI: `mongodb://localhost:27017/photography_booking`

### Using MongoDB Atlas

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URI` in the backend `.env` file

## 👤 Default Admin Account

To create an admin account, you can either:

### Option 1: Register and Update via MongoDB
1. Register a new user through the application
2. Connect to your MongoDB database
3. Find the user in the `users` collection
4. Update the `role` field from `"user"` to `"admin"`

### Option 2: Manual Database Entry
Use MongoDB Compass or CLI to create an admin user directly:
```javascript
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "$2a$10$...", // hashed password
  "role": "admin",
  "phone": "1234567890"
}
```

## 📁 Project Structure

```
full stack project/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── bookingController.js  # Booking CRUD operations
│   │   ├── galleryController.js  # Gallery management
│   │   ├── packageController.js  # Package management
│   │   └── userController.js     # User management
│   ├── middleware/
│   │   └── auth.js               # Authentication middleware
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Booking.js            # Booking schema
│   │   ├── Gallery.js            # Gallery schema
│   │   └── Package.js            # Package schema
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication routes
│   │   ├── bookingRoutes.js      # Booking routes
│   │   ├── galleryRoutes.js      # Gallery routes
│   │   ├── packageRoutes.js      # Package routes
│   │   └── userRoutes.js         # User routes
│   ├── .env                      # Environment variables
│   ├── package.json              # Backend dependencies
│   └── server.js                 # Server entry point
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js         # Navigation bar
│   │   │   ├── UserSidebar.js    # User panel sidebar
│   │   │   └── AdminSidebar.js   # Admin panel sidebar
│   │   ├── context/
│   │   │   └── AuthContext.js    # Authentication context
│   │   ├── pages/
│   │   │   ├── public/
│   │   │   │   └── HomePage.js
│   │   │   ├── auth/
│   │   │   │   ├── LoginPage.js
│   │   │   │   └── RegisterPage.js
│   │   │   ├── user/
│   │   │   │   ├── UserDashboard.js
│   │   │   │   ├── UserBookings.js
│   │   │   │   ├── CreateBooking.js
│   │   │   │   ├── Packages.js
│   │   │   │   └── Gallery.js
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.js
│   │   │       ├── AdminBookings.js
│   │   │       ├── AdminPackages.js
│   │   │       ├── AdminGallery.js
│   │   │       └── AdminUsers.js
│   │   ├── services/
│   │   │   └── api.js            # API service layer
│   │   ├── App.js                # Main app component
│   │   ├── index.js              # React entry point
│   │   └── index.css             # Global styles
│   ├── package.json              # Frontend dependencies
│   ├── tailwind.config.js        # Tailwind configuration
│   └── postcss.config.js         # PostCSS configuration
│
└── README.md                     # This file
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Bookings
- `GET /api/bookings` - Get all bookings (filtered by role)
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get single booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

### Packages
- `GET /api/packages` - Get all packages
- `POST /api/packages` - Create package (Admin only)
- `GET /api/packages/:id` - Get single package
- `PUT /api/packages/:id` - Update package (Admin only)
- `DELETE /api/packages/:id` - Delete package (Admin only)

### Gallery
- `GET /api/gallery` - Get all gallery items
- `POST /api/gallery` - Create gallery item (Admin only)
- `GET /api/gallery/:id` - Get single gallery item
- `PUT /api/gallery/:id` - Update gallery item (Admin only)
- `DELETE /api/gallery/:id` - Delete gallery item (Admin only)

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get single user (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

## 🎯 Usage

### For Users
1. **Register**: Create an account on the registration page
2. **Login**: Sign in with your credentials
3. **Browse Packages**: View available photography packages
4. **Create Booking**: Schedule a photography session
5. **Manage Bookings**: View, update, or cancel your bookings
6. **View Gallery**: Browse the photography portfolio

### For Admins
1. **Login**: Sign in with admin credentials
2. **Dashboard**: View overall statistics and recent activities
3. **Manage Bookings**: View all bookings and update their status
4. **Manage Packages**: Create, update, or delete photography packages
5. **Manage Gallery**: Add, edit, or remove portfolio images
6. **Manage Users**: View all users, change roles, and manage accounts

## 🎨 Customization

### Color Scheme
Edit `frontend/tailwind.config.js` to customize the color palette:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Branding
- Update the logo and site name in `Navbar.js`
- Modify the hero section in `HomePage.js`
- Change footer information

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check the connection string in `.env`
- Verify network access if using MongoDB Atlas

### Port Already in Use
- Change the PORT in backend `.env` file
- Update the proxy in frontend `package.json`

### CORS Errors
- Verify CORS is enabled in `server.js`
- Check that frontend and backend URLs match

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or support, please contact the development team.

---

**Built with ❤️ using the MERN Stack**
