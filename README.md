<div align="center">

# 🚀 Micro Marketplace Platform

### Full-Stack E-Commerce Application with Cross-Platform Support

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%3E%3D%207.0-green)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue)](https://reactnative.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, scalable full-stack marketplace application featuring **RESTful API Backend**, **Responsive Web Client**, and **Native Mobile Application** built with industry-standard technologies and best practices.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [API Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
  - [Backend Setup](#1-backend-setup)
  - [Web Client Setup](#2-web-client-setup)
  - [Mobile App Setup](#3-mobile-app-setup)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Testing Credentials](#-testing-credentials)
- [Troubleshooting](#-troubleshooting)
- [Deployment](#-deployment)
- [Architecture & Design Decisions](#-architecture--design-decisions)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The **Micro Marketplace Platform** is a comprehensive full-stack e-commerce solution demonstrating modern development practices and cross-platform architecture. Built as part of a Full Stack Developer Internship Assignment, this project showcases proficiency in both frontend and backend technologies, RESTful API design, state management, authentication systems, and mobile app development.

### Key Highlights

- 🔐 **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- 📦 **Product Management** - Full CRUD operations with search and pagination
- ❤️ **Favorites System** - User-specific favorites with real-time updates
- 🌐 **Responsive Web App** - Modern React SPA with smooth animations
- 📱 **Native Mobile App** - Cross-platform iOS/Android app using Expo
- 🚀 **RESTful API** - Well-documented, scalable backend architecture
- 🎨 **Modern UI/UX** - Clean interface with micro-interactions

---

## ✨ Features

### 🔐 Authentication & Authorization

- User registration with email validation
- Secure login with JWT token generation
- Password hashing using bcrypt
- Protected routes and middleware guards
- Token-based session management
- User profile retrieval

### 📦 Product Management

- **CRUD Operations** - Create, Read, Update, Delete products
- **Search Functionality** - Text-based product search with MongoDB regex
- **Pagination** - Efficient data loading with customizable page size
- **Product Details** - Comprehensive product information display
- **Image Support** - Product image management and display

### ❤️ Favorites System

- Toggle products as favorites
- User-specific favorites list
- Persistent favorites across sessions
- Real-time UI updates
- Available on both web and mobile platforms

### 🌐 Web Application Features

- Responsive design for all screen sizes
- Smooth page transitions with Framer Motion
- Advanced search and filtering
- Pagination controls
- Product detail modal/page
- User-friendly navigation
- Optimized performance with React 18

### 📱 Mobile Application Features

- Native iOS and Android support
- Intuitive navigation with React Navigation
- Pull-to-refresh functionality
- Load more pagination
- Offline-first considerations
- Native UI components
- Cross-platform consistency

---

## 🧱 Tech Stack

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | ≥18.0.0 | Runtime environment |
| **Express.js** | ^5.2.1 | Web application framework |
| **MongoDB** | ≥7.0 | NoSQL database |
| **Mongoose** | ^9.2.1 | MongoDB ODM |
| **JWT** | ^9.0.3 | Authentication tokens |
| **bcryptjs** | ^3.0.3 | Password hashing |
| **dotenv** | ^17.3.1 | Environment configuration |
| **Morgan** | ^1.10.1 | HTTP request logger |
| **CORS** | ^2.8.6 | Cross-origin resource sharing |

### Web Client

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^18.3.1 | UI library |
| **Vite** | ^7.3.1 | Build tool and dev server |
| **React Router** | ^6.30.3 | Client-side routing |
| **Axios** | ^1.13.5 | HTTP client |
| **Framer Motion** | ^12.34.2 | Animation library |
| **ESLint** | ^9.39.1 | Code linting |

### Mobile Application

| Technology | Version | Purpose |
|------------|---------|---------|
| **React Native** | 0.81.5 | Mobile framework |
| **Expo** | ~54.0.33 | Development platform |
| **React Navigation** | ^7.1.28 | Navigation library |
| **Axios** | ^1.13.5 | HTTP client |
| **React** | 19.1.0 | UI library |

---

## 🏗️ Architecture

This application follows a **monorepo structure** with three main components:

```
┌─────────────────────────────────────────────────────────┐
│                     Mobile App (Expo)                    │
│                    React Native Client                   │
└──────────────────┬──────────────────────────────────────┘
                   │
                   │  HTTP/REST
                   │
┌──────────────────▼──────────────────────────────────────┐
│                  RESTful API Backend                     │
│              Express.js + MongoDB                        │
│        (Authentication, Products, Favorites)             │
└──────────────────▲──────────────────────────────────────┘
                   │
                   │  HTTP/REST
                   │
┌──────────────────┴──────────────────────────────────────┐
│                    Web Client (SPA)                      │
│                  React + Vite + Router                   │
└─────────────────────────────────────────────────────────┘
```

**Key Architectural Principles:**

- **MVC Pattern** - Model-View-Controller separation in backend
- **RESTful Design** - Standard HTTP methods and status codes
- **JWT Authentication** - Stateless, scalable authentication
- **Component-Based UI** - Reusable components across platforms
- **Context API** - Centralized state management
- **Responsive Design** - Mobile-first approach

---

## 📁 Project Structure

```
AssignmentProject/
│
├── 📦 server/                      # Backend API Server
│   ├── index.js                    # Server entry point
│   ├── package.json                # Backend dependencies
│   └── src/
│       ├── app.js                  # Express app configuration
│       ├── config/
│       │   └── db.js               # MongoDB connection
│       ├── controllers/
│       │   ├── auth.controller.js  # Authentication logic
│       │   └── product.controller.js # Product CRUD logic
│       ├── middlewares/
│       │   └── auth.middleware.js  # JWT verification
│       ├── models/
│       │   ├── user.model.js       # User schema
│       │   └── product.model.js    # Product schema
│       ├── routes/
│       │   ├── auth.routes.js      # Auth endpoints
│       │   └── product.routes.js   # Product endpoints
│       ├── seed/
│       │   └── seed.js             # Database seeding
│       └── utils/
│           └── generateToken.js    # JWT utilities
│
├── 🌐 client/                      # Web Application
│   ├── index.html                  # HTML entry point
│   ├── package.json                # Web dependencies
│   ├── vite.config.js              # Vite configuration
│   ├── eslint.config.js            # ESLint rules
│   └── src/
│       ├── main.jsx                # React entry point
│       ├── App.jsx                 # Root component
│       ├── App.css                 # Global styles
│       ├── index.css               # Base styles
│       ├── api/
│       │   └── api.js              # API client configuration
│       ├── components/
│       │   ├── Navbar.jsx          # Navigation component
│       │   ├── Pagination.jsx      # Pagination component
│       │   └── ProductCard.jsx     # Product card component
│       ├── context/
│       │   └── AuthContext.jsx     # Authentication context
│       └── pages/
│           ├── Home.jsx            # Product listing page
│           ├── Login.jsx           # Login page
│           ├── Register.jsx        # Registration page
│           ├── ProductDetail.jsx   # Product detail page
│           └── Favorites.jsx       # Favorites page
│
├── 📱 mobile/                      # Mobile Application
│   ├── App.js                      # Root component
│   ├── index.js                    # Entry point
│   ├── app.json                    # Expo configuration
│   ├── package.json                # Mobile dependencies
│   └── src/
│       ├── api/
│       │   └── api.js              # API client configuration
│       ├── components/
│       │   └── ProductCard.js      # Product card component
│       ├── context/
│       │   └── AuthContext.js      # Authentication context
│       └── screens/
│           ├── HomeScreen.js       # Product listing screen
│           ├── LoginScreen.js      # Login screen
│           ├── DetailScreen.js     # Product detail screen
│           └── FavoritesScreen.js  # Favorites screen
│
├── package.json                    # Root workspace config
└── README.md                       # This file
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

- **Node.js** (v18.0.0 or higher)
  - Download: https://nodejs.org/
  - Verify: `node --version`

- **npm** (v9.0.0 or higher)
  - Comes with Node.js
  - Verify: `npm --version`

- **MongoDB** (v7.0 or higher)
  - Download: https://www.mongodb.com/try/download/community
  - Verify: `mongod --version`
  - Alternative: Use MongoDB Atlas (cloud database)

### Optional (for Mobile Development)

- **Expo Go App** (for physical device testing)
  - iOS: Download from App Store
  - Android: Download from Play Store

- **Android Studio** (for Android emulator)
  - Download: https://developer.android.com/studio

- **Xcode** (for iOS simulator - macOS only)
  - Download from Mac App Store

### System Requirements

- **Operating System**: Windows 10/11, macOS 10.15+, or Linux
- **RAM**: Minimum 8GB (16GB recommended)
- **Disk Space**: At least 2GB free space

---

## 🚀 Installation

Follow these steps to set up the project locally:

### 1. Backend Setup

#### Step 1.1: Clone the Repository

```bash
git clone https://github.com/Mohit-codes27/Micro_MarketPlace_App.git
```

#### Step 1.2: Install Server Dependencies

```bash
cd server
npm install
```

#### Step 1.3: Configure Environment Variables

Create a `.env` file in the `server` directory:

```bash
# Windows
type nul > .env

# macOS/Linux
touch .env
```

Add the following environment variables to `.env`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb://127.0.0.1:27017/micro_marketplace

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d
```

> ⚠️ **Security Note**: Replace `JWT_SECRET` with a strong, random string in production.

#### Step 1.4: Start MongoDB

Make sure MongoDB is running on your system:

```bash
# Windows (if MongoDB is installed as a service)
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Or run manually
mongod
```

#### Step 1.5: Seed the Database

Populate the database with sample data:

```bash
npm run seed
```

**Expected Output:**
```
✅ Database Connected
✅ 2 users created
✅ 20 products created
✅ Database seeded successfully!
```

#### Step 1.6: Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

**Server should start at:** http://localhost:5000

---

### 2. Web Client Setup

#### Step 2.1: Navigate to Client Directory

```bash
# From the project root
cd client
```

#### Step 2.2: Install Dependencies

```bash
npm install
```

#### Step 2.3: Configure API Endpoint (if needed)

The API endpoint is configured in `client/src/api.js`. Default is `http://localhost:5000`.

If your backend runs on a different port, update the `baseURL`:

```javascript
// client/src/api.js
const api = axios.create({
  baseURL: "http://localhost:YOUR_PORT", // Change if needed
});
```

#### Step 2.4: Start Development Server

```bash
npm run dev
```

**Client should start at:** http://localhost:5173

**Available Commands:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

### 3. Mobile App Setup

#### Step 3.1: Navigate to Mobile Directory

```bash
# From the project root
cd mobile
```

#### Step 3.2: Install Dependencies

```bash
npm install
```

#### Step 3.3: Configure API Endpoint

**Important:** The mobile app needs to connect to your backend API.

1. Find your local IP address:

   ```bash
   # Windows
   ipconfig
   # Look for "IPv4 Address" under your active network adapter
   # Example: 192.168.1.10

   # macOS/Linux
   ifconfig
   # Look for "inet" under your active network interface
   # Example: 192.168.1.10
   ```

2. Update the API baseURL in `mobile/src/api.js`:

   ```javascript
   const api = axios.create({
     baseURL: "http://YOUR_LOCAL_IP:5000", // e.g., http://192.168.1.10:5000
   });
   ```

> ⚠️ **Important**: Do NOT use `localhost` or `127.0.0.1` for mobile - use your computer's LAN IP address.

#### Step 3.4: Start Expo Development Server

```bash
npx expo start -c
```

**Available Options:**
- Press `w` - Open in web browser
- Press `a` - Open in Android emulator
- Press `i` - Open in iOS simulator (macOS only)
- Scan QR code with Expo Go app for physical device

**Available Commands:**
- `npm start` - Start Expo development server
- `npm run android` - Start on Android
- `npm run ios` - Start on iOS (macOS only)
- `npm run web` - Start web version

---

## 🔐 Environment Variables

### Backend Environment Variables

Create a `.env` file in the `server` directory with the following variables:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port number | `5000` | No |
| `NODE_ENV` | Environment mode | `development` | No |
| `MONGO_URI` | MongoDB connection string | - | **Yes** |
| `JWT_SECRET` | Secret key for JWT signing | - | **Yes** |
| `JWT_EXPIRE` | JWT expiration time | `7d` | No |

#### Example Configuration

```env
# Development
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/micro_marketplace
JWT_SECRET=dev_secret_key_123abc
JWT_EXPIRE=7d

# Production (example)
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/marketplace?retryWrites=true&w=majority
JWT_SECRET=your_production_secret_key_minimum_32_characters
JWT_EXPIRE=7d
```

---

## 📚 API Documentation

### Base URL

```
http://localhost:5000
```

### Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

---

### Authentication Endpoints

#### 1. Register User

**Endpoint:** `POST /auth/register`

**Description:** Create a new user account

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "John Doe",
    "email": "john@example.com",
    "favorites": []
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "User already exists"
}
```

---

#### 2. Login User

**Endpoint:** `POST /auth/login`

**Description:** Authenticate user and receive JWT token

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "John Doe",
    "email": "john@example.com",
    "favorites": ["60f7b3b3b3b3b3b3b3b3b3b4"]
  }
}
```

**Error Response (401 Unauthorized):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

#### 3. Get Current User

**Endpoint:** `GET /auth/me`

**Description:** Get currently authenticated user details

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "John Doe",
    "email": "john@example.com",
    "favorites": ["60f7b3b3b3b3b3b3b3b3b3b4"]
  }
}
```

---

### Product Endpoints

#### 4. Get All Products

**Endpoint:** `GET /products`

**Description:** Retrieve paginated list of products with optional search

**Query Parameters:**
- `search` (optional) - Search term for product name/description
- `page` (optional) - Page number (default: 1)
- `limit` (optional) - Items per page (default: 10)

**Example Request:**
```
GET /products?search=phone&page=1&limit=6
```

**Response (200 OK):**
```json
{
  "success": true,
  "count": 6,
  "totalProducts": 15,
  "totalPages": 3,
  "currentPage": 1,
  "products": [
    {
      "_id": "60f7b3b3b3b3b3b3b3b3b3b4",
      "name": "Smartphone Pro",
      "description": "Latest flagship smartphone",
      "price": 999.99,
      "category": "Electronics",
      "imageUrl": "https://example.com/image.jpg",
      "stock": 50,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
    // ... more products
  ]
}
```

---

#### 5. Get Single Product

**Endpoint:** `GET /products/:id`

**Description:** Retrieve detailed information about a specific product

**Response (200 OK):**
```json
{
  "success": true,
  "product": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b4",
    "name": "Smartphone Pro",
    "description": "Latest flagship smartphone with advanced features",
    "price": 999.99,
    "category": "Electronics",
    "imageUrl": "https://example.com/image.jpg",
    "stock": 50,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-20T15:45:00.000Z"
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Product not found"
}
```

---

#### 6. Create Product

**Endpoint:** `POST /products`

**Description:** Create a new product (Protected route)

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 49.99,
  "category": "Electronics",
  "imageUrl": "https://example.com/image.jpg",
  "stock": 100
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "product": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b5",
    "name": "New Product",
    "description": "Product description",
    "price": 49.99,
    "category": "Electronics",
    "imageUrl": "https://example.com/image.jpg",
    "stock": 100,
    "createdAt": "2024-02-20T12:00:00.000Z"
  }
}
```

---

#### 7. Update Product

**Endpoint:** `PUT /products/:id`

**Description:** Update an existing product (Protected route)

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Updated Product Name",
  "price": 59.99,
  "stock": 75
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "product": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b5",
    "name": "Updated Product Name",
    "description": "Product description",
    "price": 59.99,
    "category": "Electronics",
    "imageUrl": "https://example.com/image.jpg",
    "stock": 75,
    "updatedAt": "2024-02-20T14:30:00.000Z"
  }
}
```

---

#### 8. Delete Product

**Endpoint:** `DELETE /products/:id`

**Description:** Delete a product (Protected route)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

---

#### 9. Toggle Favorite

**Endpoint:** `PATCH /products/:id/favorite`

**Description:** Add or remove product from user's favorites (Protected route)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Product added to favorites",
  "favorites": ["60f7b3b3b3b3b3b3b3b3b3b4", "60f7b3b3b3b3b3b3b3b3b3b5"]
}
```

---

#### 10. Get User Favorites

**Endpoint:** `GET /products/favorites/me`

**Description:** Retrieve all favorite products for the authenticated user (Protected route)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "count": 2,
  "favorites": [
    {
      "_id": "60f7b3b3b3b3b3b3b3b3b3b4",
      "name": "Smartphone Pro",
      "description": "Latest flagship smartphone",
      "price": 999.99,
      "category": "Electronics",
      "imageUrl": "https://example.com/image.jpg",
      "stock": 50
    },
    {
      "_id": "60f7b3b3b3b3b3b3b3b3b3b5",
      "name": "Laptop Ultra",
      "description": "High-performance laptop",
      "price": 1499.99,
      "category": "Electronics",
      "imageUrl": "https://example.com/laptop.jpg",
      "stock": 25
    }
  ]
}
```

---

### HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## 🧪 Testing Credentials

The seed script creates the following test accounts:

### User 1
- **Email:** `mohit@test.com`
- **Password:** `123456`
- **Name:** Mohit

### User 2
- **Email:** `test@test.com`
- **Password:** `123456`
- **Name:** Test User

> 💡 **Note:** These credentials are for development and testing only. Do not use in production.

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. MongoDB Connection Error

**Error:**
```
MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
```

**Solution:**
- Ensure MongoDB is running: `mongod` or start the MongoDB service
- Check if MongoDB port (27017) is available
- Verify `MONGO_URI` in `.env` file is correct

---

#### 2. Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**
- Change the PORT in `.env` file
- Or kill the process using that port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F

  # macOS/Linux
  lsof -ti:5000 | xargs kill -9
  ```

---

#### 3. JWT Authentication Failed

**Error:**
```
401 Unauthorized: No token provided
```

**Solution:**
- Ensure you're sending the token in the Authorization header
- Format: `Authorization: Bearer <token>`
- Token should be obtained from login/register response
- Check if token hasn't expired (default: 7 days)

---

#### 4. Mobile App Can't Connect to Backend

**Error:**
```
Network Error / Connection refused
```

**Solution:**
- Don't use `localhost` or `127.0.0.1` on mobile
- Use your computer's LAN IP address (e.g., `192.168.1.10`)
- Ensure backend server is running
- Check firewall settings - allow incoming connections on port 5000
- Ensure mobile device and computer are on the same network

---

#### 5. CORS Error

**Error:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
- CORS is already configured in the backend
- If using a different frontend URL, update CORS settings in `server/src/app.js`
- Add your frontend URL to the CORS whitelist if needed

---

#### 6. Expo Build Error

**Error:**
```
Unable to resolve module
```

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npx expo start -c
```

---

#### 7. Vite Build Issues

**Solution:**
```bash
# Clear Vite cache
npm run build -- --force
# Or delete cache manually
rm -rf node_modules/.vite
```

---

## 🚢 Deployment

### Backend Deployment

#### Option 1: Heroku

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
cd server
heroku create your-app-name

# Set environment variables
heroku config:set MONGO_URI="your_mongodb_atlas_uri"
heroku config:set JWT_SECRET="your_secret_key"
heroku config:set JWT_EXPIRE="7d"
heroku config:set NODE_ENV="production"

# Deploy
git push heroku main

# Run seed (optional)
heroku run npm run seed
```

#### Option 2: Railway

1. Connect your GitHub repository
2. Select the `server` directory as root
3. Add environment variables in Railway dashboard
4. Deploy automatically on push

#### Option 3: DigitalOcean App Platform

1. Create new app from GitHub
2. Select `server` directory
3. Add environment variables
4. Deploy

---

### Web Client Deployment

#### Option 1: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd client
vercel

# Set environment variables in Vercel dashboard
# Add VITE_API_URL with your backend URL
```

#### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
cd client
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

#### Option 3: GitHub Pages

```bash
# Install gh-pages
npm i -D gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

### Mobile App Deployment

#### Build for Production

**Android (APK):**
```bash
cd mobile
npx expo build:android
```

**iOS (requires Apple Developer account):**
```bash
npx expo build:ios
```

**Using EAS Build (Recommended):**
```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure
eas build:configure

# Build
eas build --platform android
eas build --platform ios
```

---

## 🏛️ Architecture & Design Decisions

### 1. Monorepo Structure
- **Decision:** Use a monorepo to keep backend, web, and mobile in one project
- **Rationale:** Easier dependency management, shared types, and consistent versioning
- **Trade-off:** Larger repository size, but better code organization

### 2. JWT Authentication
- **Decision:** Use JWT tokens for authentication instead of sessions
- **Rationale:** Stateless, scalable, works well with mobile apps
- **Implementation:** Token sent via Authorization header, 7-day expiration

### 3. Favorites Storage
- **Decision:** Store favorites as array in User schema instead of separate collection
- **Rationale:** Simplified queries, faster read operations for user favorites
- **Trade-off:** Denormalization, but acceptable for this use case

### 4. Search Implementation
- **Decision:** Use MongoDB regex for text search
- **Rationale:** Simple implementation, no additional indexes needed
- **Alternative:** Could use MongoDB text indexes for better performance at scale

### 5. Pagination Strategy
- **Decision:** Offset-based pagination using `skip` and `limit`
- **Rationale:** Simple to implement, works well for small to medium datasets
- **Alternative:** Cursor-based pagination would be better for very large datasets

### 6. API Design
- **Decision:** RESTful API with conventional HTTP methods
- **Rationale:** Industry standard, easy to understand and consume
- **Structure:** Resource-based URLs (`/products`, `/auth`)

### 7. State Management
- **Decision:** Use React Context API for authentication state
- **Rationale:** Built-in, no additional dependencies, sufficient for this app's complexity
- **Alternative:** Redux/Zustand would be better for larger, more complex state

### 8. Mobile Development
- **Decision:** Use Expo instead of bare React Native
- **Rationale:** Faster development, easier deployment, built-in tools
- **Trade-off:** Some limitations with native modules, but acceptable for this project

### 9. UI Architecture
- **Decision:** Component-based architecture with reusable components
- **Rationale:** Code reusability, maintainability, testability
- **Implementation:** Separate components, pages, and context folders

### 10. Error Handling
- **Decision:** Consistent error response format across all endpoints
- **Rationale:** Easier error handling on client side
- **Format:** `{ success: false, message: "Error description" }`

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Made with ❤️ and ☕**

[Back to Top](#-micro-marketplace-platform)

</div>