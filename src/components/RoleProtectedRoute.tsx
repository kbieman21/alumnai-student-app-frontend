import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";


interface AuthenticatedRouteProps {
  children: ReactNode;
   allowedRoles: string[];
}

export default function RoleProtectedRoute({ children, allowedRoles }:AuthenticatedRouteProps) {
  const role = localStorage.getItem("role");

  // Not logged in or no role
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  // Admin can access everything
  if (role === "admin") {
    return children;
  }

  // Check if role is allowed
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
