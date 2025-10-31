import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BankSoal from './pages/BankSoal';
import ExamBuilder from './pages/ExamBuilder';
import Analytics from './pages/Analytics';
import ReviewValidation from './pages/ReviewValidation';
import UserManagement from './pages/UserManagement';
import AIGenerator from './pages/AIGenerator';
import Notifications from './pages/Notifications';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh' 
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/bank-soal" element={<BankSoal />} />
                <Route path="/exam-builder" element={<ExamBuilder />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/review" element={<ReviewValidation />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/ai-generator" element={<AIGenerator />} />
                <Route path="/notifications" element={<Notifications />} />
              </Routes>
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
