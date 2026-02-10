import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = false; // mock value

  return isLoggedIn ? children : <Navigate to="/" replace />;
}
