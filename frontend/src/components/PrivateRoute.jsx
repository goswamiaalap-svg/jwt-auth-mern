import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Protects routes that require authentication
export function PrivateRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();

  if (loading) return <div style={styles.center}>Loading…</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  return children;
}

const styles = {
  center: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.2rem' }
};
