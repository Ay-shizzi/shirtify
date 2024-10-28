import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import PropTypes from "prop-types";

const PrivateRoute = ({ Component }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return user ? <Component /> : <Navigate to="/signin" />;
};

PrivateRoute.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
