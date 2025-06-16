# EchoSync - Full Stack Realtime Chat Application

This repository contains a complete real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. The project features user authentication, real-time messaging, global state management, and a modern UI built with TailwindCSS and Daisy UI.

## Project Overview

EchoSync is a real-time chat application that enables users to communicate instantly through a modern, responsive interface. The project is designed with scalability and maintainability in mind, following best practices across both frontend and backend development.

## Features

- MERN stack architecture (MongoDB, Express, React, Node.js)
- Secure authentication and authorization using JWT
- Real-time bi-directional communication using Socket.io
- Online user presence detection
- Global state management using Zustand
- Responsive design using TailwindCSS and Daisy UI
- Modular code structure with proper error handling
- Production-ready build and deployment support

## Folder Structure
├── backend
│ ├── src/
│ ├── package.json
│ └── .env
├── frontend
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── .env
├── .env
├── README.md
└── LICENSE


## Environment Variables

Create `.env` files in the root, `backend/`, and `frontend/` directories to securely store your configuration details.

### Sample `.env` for Backend

MONGODB_URI=your_mongodb_uri
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development

### Sample `.env` for Frontend (Vite)
VITE_API_BASE_URL=http://localhost:5001/api


## Getting Started

Follow the steps below to run the application locally.

### 1. Clone the Repository

git clone https://github.com/ManjunathV007/EchoSync
cd EchoSync

### 2. Install Dependencies

#### Backend

cd backend
npm install or npm i
npm start

#### Frontend

Open a new terminal
cd frontend
npm install
npm run dev


## Deployment

This application is ready to be deployed on platforms such as Render (for backend) and Netlify or Vercel (for frontend). Ensure your production environment variables are properly set on your deployment platform.

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](LICENSE) file for details.



