import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RedirectIfAuthenticated = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home if user is authenticated
    }
  }, [user, navigate]);

  return <>{children}</>; // Render children if user is not authenticated
};

export default RedirectIfAuthenticated;
