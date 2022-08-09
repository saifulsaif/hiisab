import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/userAuth";

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  console.log("hi");
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
