import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import BankSoal from './pages/BankSoal';
import ExamBuilder from './pages/ExamBuilder';
import Analytics from './pages/Analytics';
import ReviewValidation from './pages/ReviewValidation';
import UserManagement from './pages/UserManagement';
import AIGenerator from './pages/AIGenerator';
import Notifications from './pages/Notifications';

function App() {
  return (
    <AuthProvider>
      <Router>
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
      </Router>
    </AuthProvider>
  );
}

export default App;
