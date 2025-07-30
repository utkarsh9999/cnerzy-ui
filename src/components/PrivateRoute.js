import React from 'react';
import { Navigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const PrivateRoute = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (isLoading) return null; // or a loading spinner

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
