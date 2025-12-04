# HCL_TECH_Hackathon_DevSparks

# **Healthcare Wellness & Preventive Care Portal — Hackathon MVP**

This project is an MVP for a **Healthcare Wellness & Preventive Care Web Portal**, built as part of a hackathon challenge.
The goal is to provide a simple, accessible platform that helps patients stay on track with their wellness goals and preventive care tasks, while enabling healthcare providers to monitor their assigned patients’ progress.

## **Tech Stack**

### **Frontend**

* React (Vite)
* React Router
* Axios
* CSS Modules

### **Backend**

* FastAPI (Python)
* JWT Authentication
* Pydantic Models
* Passlib (bcrypt)

### **Database**

* MongoDB Atlas

### **Deployment**

* Frontend: Vercel
* Backend: Render

### **DevOps**

* GitHub
* GitHub Actions (CI/CD)

---

## **Core Features**

### **For Patients**

* Secure login & JWT-based authentication
* Manage personal medical profiles
* Track daily wellness and lifestyle goals
* Receive preventive care reminders
* “Health Tip of the Day” module

### **For Healthcare Providers**

* View assigned patients
* Track patient activity and compliance

### **Public Access**

* General health awareness pages
* No authentication required

---

## **Security**

* Hashed passwords using bcrypt
* JWT access control with expiration
* Role-based permissions (patient/provider)
* Consent tracking during registration
* Audit logging for medical data access
* HTTPS enforced on production deployments

---

## **Project Structure**

```
/repo-root
  /frontend      # React (Vite) client
  /backend       # FastAPI server
  /infra         # CI/CD, infra configs
  README.md
  .env.example
```

---

## **Environment Variables**

Create a `.env` file under `/backend`:

```
MONGO_URI=
JWT_SECRET=
JWT_ALGORITHM=HS256
JWT_EXPIRE_MINUTES=1440
FRONTEND_URL=http://localhost:5173
```

---

## **Local Development Setup**

### 1. Clone the Repository

```bash
git clone https://github.com/aryan91111/healthcare-wellness-and-preventive-care-portal-team-rocket.git
cd healthcare-wellness-and-preventive-care-portal-team-rocket
git checkout develop
```

---

## **Backend Setup (FastAPI)**

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate   # Windows
# or
source .venv/bin/activate       # macOS/Linux

pip install fastapi uvicorn motor pydantic pyjwt passlib[bcrypt] python-dotenv

uvicorn main:app --reload
```

Backend will run at:
👉 [http://localhost:8000](http://localhost:8000)

---

## **Frontend Setup (React Vite)**

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:
👉 [http://localhost:5173](http://localhost:5173)

---

## 📡 **API Endpoints Overview**

### **Auth**

* `POST /api/auth/register`
* `POST /api/auth/login`

### **User**

* `GET /api/users/me`
* `PUT /api/users/me`

### **Goals**

* `GET /api/goals`
* `POST /api/goals`

### **Reminders**

* `GET /api/reminders`
* `POST /api/reminders`

### **Provider**

* `GET /api/provider/patients`
* `GET /api/provider/patients/{id}`

### **Public**

* `GET /api/public/{slug}`

---

## **CI/CD Workflow**

* Push to **develop** → runs tests and linting
* Push to **main** → automatic production deployment
* Secrets managed securely through GitHub Secrets

---

## **Deployment**

Links will be added once the project is deployed:

* **Frontend:**
* **Backend:**

---

## **Notes**

* Built with a focus on simplicity and clarity (hackathon-friendly).
* Modular design makes it easy to extend with analytics, dashboards, appointment systems, or ML-powered insights.
