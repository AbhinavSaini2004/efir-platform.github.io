# EFIR Management Portal

A centralized platform for electronic FIR registration, management, and analytics.  
This monorepo contains all code for the citizen portal, admin portal, and backend APIs.

---

## 📁 Folder Structure
EFIRManagement portal/ │ ├── backend/ # Main Node.js/Express backend API for citizens │ └── server.js │ ├── E-FIR/ # Citizen-facing React frontend │ └── src/index.js │ ├── admin/ │ ├── backend/ # Admin Node.js/Express backend API │ │ └── server.js │ └── frontend/ # Admin React frontend │ └── src/index.js


---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "EFIRManagement portal"

2. Install dependencies

cd backend && npm install
cd ../E-FIR && npm install
cd ../admin/backend && npm install
cd ../admin/frontend && npm install

3. Environment Variables

MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret

4. Start Development Servers
cd backend
npm start
# Runs on http://localhost:5000

Citizen Frontend:
cd ../admin/backend
npm start
# Runs on http://localhost:5001

Admin Frontend:
cd ../frontend
npm start
# Runs on http://localhost:3001

Deployment
Deploy the frontend build folders (build/) to any static hosting (Vercel, Netlify, etc).
Deploy the backend servers to Node.js hosting (Render, Railway, VPS, etc).
Make sure to set environment variables for MongoDB and JWT secrets in your deployment platform.
📦 Requirements
Node.js (v14 or above)
npm
MongoDB (local or cloud)
👨‍💻 Contributing
Feel free to fork, open issues, or submit pull requests!

📣 Notes
Make sure your backend APIs are running and accessible to the frontends.
For deployment, set the correct API URLs in your environment variables if needed.