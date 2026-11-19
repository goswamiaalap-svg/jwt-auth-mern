import { Link } from 'react-router-dom';

export default function Unauthorized() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'Segoe UI, Arial, sans-serif', background: '#f0f2f5' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: '3rem', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', maxWidth: 420 }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🚫</div>
        <h1 style={{ color: '#e94560', marginBottom: 8 }}>Access Denied</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>You do not have permission to view this page.</p>
        <Link to="/dashboard" style={{ background: '#1a1a2e', color: '#fff', borderRadius: 8, padding: '10px 24px', fontWeight: 600 }}>Go to Dashboard</Link>
      </div>
    </div>
  );
}
