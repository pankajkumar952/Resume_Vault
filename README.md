📄ResumeVault

<div align="center">
  
### 🚀 Modern Resume Management & Portfolio Platform

**Built by Er. Pankaj Kumar**

A full-stack web application for securely managing, organizing, uploading, and accessing resumes and professional documents.

[🌐 Live Demo](https://resume-vault-1.onrender.com/)

</div>

---

## 🌟 About ResumeVault

**ResumeVault** is a full-stack resume management platform designed to provide a centralized and secure place for managing professional resumes and related documents.

The application combines a modern frontend with a Node.js backend, MongoDB database, JWT authentication, Cloudinary file storage, and optional Google OAuth authentication.

Whether you're managing multiple versions of your resume, uploading professional documents, or building a personal resume-management system, ResumeVault provides a clean foundation for the workflow.

---

## 🌐 Live Demo

🚀 **Live Application:**  
https://resume-vault-1.onrender.com/

> The application is deployed using Render.

---

## ✨ Key Features

- 🔐 **User Authentication**
  - Secure JWT-based authentication
  - Login and registration
  - Protected application routes

- 📄 **Resume Management**
  - Upload resumes
  - Manage multiple resume versions
  - Access stored resume files
  - Organize professional documents

- ☁️ **Cloud File Storage**
  - Cloudinary integration
  - Secure cloud-based file handling

- 🗄️ **MongoDB Database**
  - User data storage
  - Resume metadata management
  - Scalable database architecture

- 🔑 **Google Authentication**
  - Optional Google OAuth integration
  - Easy account authentication

- ⚡ **Modern Full-Stack Architecture**
  - Next.js frontend
  - Node.js backend
  - REST API architecture
  - MongoDB database

- 📱 **Responsive UI**
  - Desktop-friendly interface
  - Mobile-friendly design
  - Clean and modern user experience

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- JavaScript
- HTML5
- CSS
- REST API integration

### Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- Google OAuth

### Database

- MongoDB
- MongoDB Atlas

### Cloud & Storage

- Cloudinary
- Render

### Development Tools

- Git
- GitHub
- npm
- VS Code

---

## 🏗️ Project Architecture

```text
ResumeVault
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── styles/
│   └── .env.local
│
├── package.json
└── README.md
```

---

# 🚀 Run Frontend + Backend Together

## 1️⃣ Install Node.js

If Node.js is not installed on your system, install **Node.js 18 or above**.

Official website:

https://nodejs.org/

Verify installation:

```bash
node --version
npm --version
```

---

# 2️⃣ Configure Backend Environment

Create:

```text
backend/.env
```

Add:

```ini
PORT=5000

MONGO_URI=mongodb+srv://YOUR_USER:YOUR_PASS@cluster0.xxxxx.mongodb.net/resumevault

JWT_SECRET=YOUR_STRONG_JWT_SECRET

CLIENT_URL=http://localhost:3000

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=http://localhost:5000/api/auth/google/callback
```

### ⚠️ Important

Never commit `.env` files containing passwords, API keys, database credentials, or secrets to GitHub.

Add them to `.gitignore`:

```gitignore
.env
.env.local
node_modules/
.next/
```

---

# 3️⃣ Configure Frontend Environment

Create:

```text
frontend/.env.local
```

Add:

```ini
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

NEXT_PUBLIC_GOOGLE_CLIENT_ID=
```

---

# 4️⃣ Create Required Free Services

### 🗄️ MongoDB Atlas

Create a free MongoDB database:

https://www.mongodb.com/atlas

Then add your MongoDB connection string to:

```text
backend/.env
```

Example:

```ini
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/resumevault
```

---

### ☁️ Cloudinary

Create a Cloudinary account:

https://cloudinary.com/

Use your Cloudinary credentials in:

```text
backend/.env
```

and your upload preset where required by the frontend.

---

# 5️⃣ Install Dependencies

Open a terminal inside the project root:

```bash
cd resumevault
```

Install dependencies for both frontend and backend:

```bash
npm run install:all
```

---

# 6️⃣ Start the Application

Run:

```bash
npm run dev
```

The application should start both services.

### Backend

```text
http://localhost:5000
```

### Frontend

```text
http://localhost:3000
```

Open:

```text
http://localhost:3000
```

in your browser.

---

# 🌐 Deploy on Render

ResumeVault can be deployed using Render.

## Backend Deployment

1. Push the project to GitHub.
2. Open Render.
3. Create a new **Web Service**.
4. Connect your GitHub repository.
5. Set the backend root directory:

```text
backend
```

6. Use:

### Build Command

```bash
npm install
```

### Start Command

```bash
npm start
```

7. Add all required backend environment variables in Render.

For example:

```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
CLIENT_URL=your_frontend_url

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=your_google_callback_url
```

After deployment, Render will provide a backend URL similar to:

```text
https://your-backend-name.onrender.com
```

---

# 🎨 Frontend Deployment

Create another Render Web Service using the same GitHub repository.

Set the root directory:

```text
frontend
```

### Build Command

```bash
npm install && npm run build
```

### Start Command

```bash
npm start
```

Add:

```ini
NEXT_PUBLIC_BACKEND_URL=https://your-backend-name.onrender.com
```

Then deploy the frontend.

---

# 🔒 Security Recommendations

For production deployment:

- Never expose MongoDB credentials.
- Never commit `.env` files.
- Use a strong JWT secret.
- Configure proper CORS settings.
- Use secure production URLs.
- Keep Cloudinary credentials private.
- Configure Google OAuth redirect URLs correctly.
- Use environment variables for all sensitive configuration.

---

# 🧪 Local Development

Typical development workflow:

```bash
# Clone repository
git clone YOUR_GITHUB_REPOSITORY_URL

# Enter project
cd resumevault

# Install dependencies
npm run install:all

# Start frontend + backend
npm run dev
```

---

# 📌 Environment Variables Summary

| Variable | Purpose |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB database connection |
| `JWT_SECRET` | JWT authentication secret |
| `CLIENT_URL` | Frontend URL |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `GOOGLE_CLIENT_ID` | Google OAuth client |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret |
| `GOOGLE_REDIRECT_URI` | Google OAuth callback |
| `NEXT_PUBLIC_BACKEND_URL` | Backend API URL |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Frontend Cloudinary configuration |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Cloudinary upload preset |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Frontend Google OAuth client |

---

# 📊 Project Highlights

| Category | Technology |
|---|---|
| Frontend | Next.js / React |
| Backend | Node.js / Express |
| Database | MongoDB |
| Authentication | JWT / Google OAuth |
| File Storage | Cloudinary |
| Deployment | Render |
| Version Control | Git / GitHub |

---

# 🎯 Project Goals

ResumeVault was developed with the following goals:

- Create a centralized resume-management platform.
- Practice full-stack application development.
- Implement authentication and authorization.
- Integrate MongoDB with a backend API.
- Implement cloud file storage.
- Build a production-style deployment workflow.
- Create a scalable foundation for future resume and career-management features.

---

# 🔮 Future Enhancements

Possible future improvements include:

- 🤖 AI-powered resume analysis
- 📊 Resume analytics dashboard
- 📝 Online resume builder
- 🎯 Job-description matching
- 🔍 Resume keyword optimization
- 📑 Multiple resume templates
- 📤 One-click resume sharing
- 🔗 Public resume profile links
- 📧 Email-based resume sharing
- 📱 Progressive Web App support
- 🧠 AI career recommendations

---

# 👨‍💻 Developer

<div align="center">

### Er. Pankaj Kumar

**Full Stack Developer | Java | Python | AI/ML**

Building modern full-stack applications and AI-powered solutions.

📧 **Email:** mrpankaj0429@gmail.com

🌐 **Live Project:**  
https://resume-vault-1.onrender.com/

</div>

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

<div align="center">

### 📄 ResumeVault

**Built with ❤️ by Er. Pankaj Kumar**

© 2026 Er. Pankaj Kumar. All Rights Reserved.

</div>
