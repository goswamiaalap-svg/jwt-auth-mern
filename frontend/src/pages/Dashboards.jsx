import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const roleColors = {
  admin: { bg: '#1a1a2e', accent: '#e94560', badge: '#e94560', label: 'Administrator' },
  manager: { bg: '#0f3460', accent: '#16213e', badge: '#0d7377', label: 'Manager' },
  user: { bg: '#16213e', accent: '#0f3460', badge: '#533483', label: 'User' },
};

function Dashboard({ role }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const c = roleColors[role] || roleColors.user;

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      {/* Navbar */}
      <nav style={{ background: c.bg, color: '#fff', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 24 }}>🔐</span>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: 1 }}>JWT Auth MERN</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ background: c.badge, color: '#fff', borderRadius: 20, padding: '4px 14px', fontSize: 13, fontWeight: 600 }}>{c.label}</span>
          <button onClick={handleLogout} style={{ background: '#e94560', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', cursor: 'pointer', fontWeight: 600 }}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: 900, margin: '3rem auto', padding: '0 1.5rem' }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: 8, color: c.bg }}>
            {role === 'admin' ? '⚙️ Admin Dashboard' : role === 'manager' ? '📊 Manager Dashboard' : '👤 User Dashboard'}
          </h1>
          <p style={{ color: '#666', marginBottom: '2rem' }}>Welcome back, <strong>{user?.name}</strong>!</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: '2rem' }}>
            {[
              { label: 'Name', value: user?.name, icon: '👤' },
              { label: 'Email', value: user?.email, icon: '📧' },
              { label: 'Role', value: c.label, icon: '🔖' },
            ].map(item => (
              <div key={item.label} style={{ background: '#f8f9fa', borderRadius: 12, padding: '1.2rem', borderLeft: `4px solid ${c.badge}` }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1 }}>{item.label}</div>
                <div style={{ fontWeight: 600, marginTop: 4, wordBreak: 'break-all' }}>{item.value}</div>
              </div>
            ))}
          </div>

          {role === 'admin' && (
            <div style={{ background: '#fff3cd', borderRadius: 10, padding: '1.2rem', border: '1px solid #ffc107' }}>
              <strong>Admin Privileges:</strong> Full system access — manage users, view all data, configure settings.
            </div>
          )}
          {role === 'manager' && (
            <div style={{ background: '#d1ecf1', borderRadius: 10, padding: '1.2rem', border: '1px solid #17a2b8' }}>
              <strong>Manager Privileges:</strong> Team management, reports, and operational oversight.
            </div>
          )}
          {role === 'user' && (
            <div style={{ background: '#d4edda', borderRadius: 10, padding: '1.2rem', border: '1px solid #28a745' }}>
              <strong>Standard Access:</strong> View your profile and personal data.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export function AdminDashboard() { return <Dashboard role="admin" />; }
export function ManagerDashboard() { return <Dashboard role="manager" />; }
export function UserDashboard() { return <Dashboard role="user" />; }
