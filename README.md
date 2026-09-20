# ResumeVault
**Built by Er. Pankaj Kumar**
Resume: https://drive.google.com/file/d/1L8pYOnTxKvLMETP0b9sLmkc_mQ9PbtA_/view?usp=sharing
---

## 🚀 Run Frontend + Backend Together — ONE Command

### Step 1 — Install Node.js (if not done)
Download from https://nodejs.org → choose version 18 or above.

---

### Step 2 — Create Environment Files

**Create file: `backend/.env`**
```
PORT=5000
MONGO_URI=mongodb+srv://YOUR_USER:YOUR_PASS@cluster0.xxxxx.mongodb.net/resumevault
JWT_SECRET=resumevault_pankaj_secret_2024
CLIENT_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=http://localhost:5000/api/auth/google/callback
```

**Create file: `frontend/.env.local`**
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
```

> Get free MongoDB at https://mongodb.com/atlas
> Get free Cloudinary at https://cloudinary.com

---

### Step 3 — Open Terminal in the resumevault folder, then run:

```bash
# First time only — install all packages
npm run install:all

# Every time — start both backend + frontend together
npm run dev
```

✅ Backend runs at: http://localhost:5000
✅ Frontend runs at: http://localhost:3000

Open http://localhost:3000 in your browser.

---

## 🌐 Deploy Live Free — Render.com (Both on ONE Platform)

1. Push this project to GitHub
2. Go to https://render.com → Sign up free

**Deploy Backend:**
- New → Web Service → your repo
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Add all backend .env variables
- Copy the URL given (e.g. https://resumevault-api.onrender.com)

**Deploy Frontend:**
- New → Web Service → same repo
- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Set NEXT_PUBLIC_BACKEND_URL = your backend URL above
- Deploy → your site is live!

---

*ResumeVault — Built by Er. Pankaj Kumar | mrpankaj0429@gmail.com*
