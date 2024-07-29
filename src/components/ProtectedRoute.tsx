import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  if (!sessionStorage.getItem('jwt')) {
    return <Navigate to='/auth/signin' replace />;
  }
  return children;
};

export default ProtectedRoute;
