# JWT Auth MERN

A full-stack MERN application implementing JWT authentication with role-based access control (admin, manager, user).

## Stack
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs
- **Frontend**: React 18, Vite, React Router v6, Axios

## Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in MONGO_URI and JWT_SECRET
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Roles
| Role | Accessible Routes |
|------|------------------|
| admin | /admin, /manager, /dashboard |
| manager | /manager, /dashboard |
| user | /dashboard |
