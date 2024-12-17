/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/signin");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;

  return <>{children}</>;
}

export default ProtectedRoute;
