import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  BarChart3,
  CheckSquare,
  Users,
  Sparkles,
  Bell,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './Layout.css';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/bank-soal', icon: BookOpen, label: 'Bank Soal' },
  { path: '/exam-builder', icon: ClipboardList, label: 'Exam Builder' },
  { path: '/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/review', icon: CheckSquare, label: 'Review & Validasi' },
  { path: '/users', icon: Users, label: 'User Management' },
  { path: '/ai-generator', icon: Sparkles, label: 'AI Generator' },
  { path: '/notifications', icon: Bell, label: 'Notifikasi' }
];

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { user } = useAuth();

  return (
    <div className="layout">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>DokterResidency</h2>
            <span>Admin Panel</span>
          </motion.div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-header">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="header-actions">
            <Link to="/notifications" className="notification-btn">
              <Bell size={20} />
              <span className="badge">3</span>
            </Link>

            <div className="profile-menu">
              <div className="profile-btn">
                <img src={user?.avatar} alt={user?.name} />
                <div className="profile-info">
                  <span className="profile-name">{user?.name}</span>
                  <span className="profile-role">{user?.role}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="page-content">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
