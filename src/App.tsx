import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import LearnerPage from "./pages/LearnerPage";
import AlumnaiPage from "./pages/AlumnaiPage";
import AdminPage from "./pages/AdminPage";
import RquestConfirmPage from "./pages/RequestConfirmPage";
import SessionAccepted from "./pages/SessionAcceptedPage";
import PostSessionSummary from "./pages/PostSessionSummary";
import SessionRematching from "./pages/SessionRematchingPage";
import RoleProtectedRoute from "./components/RoleProtectedRoute";

// console.log(import.meta.env.VITE_BACKEND_URL);

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-center bg-sky-500 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/declinesession"
            element={
              <AuthenticatedRoute>
                <SessionRematching />
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/postsession"
            element={
              <AuthenticatedRoute>
                <PostSessionSummary />
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/sessionaccept"
            element={
              <AuthenticatedRoute>
                <RoleProtectedRoute allowedRoles={["learner", "tutor"]}>
                  <SessionAccepted />
                </RoleProtectedRoute>
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/confirm"
            element={
              <AuthenticatedRoute>
                <RquestConfirmPage />
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AuthenticatedRoute>
                <RoleProtectedRoute allowedRoles={["admin"]}>
                  <AdminPage />
                </RoleProtectedRoute>
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/tutor"
            element={
              <AuthenticatedRoute>
                <RoleProtectedRoute allowedRoles={["tutor"]}>
                  <AlumnaiPage />
                </RoleProtectedRoute>
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/learner"
            element={
              <AuthenticatedRoute>
                <RoleProtectedRoute allowedRoles={["learner"]}>
                  <LearnerPage />
                </RoleProtectedRoute>
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
