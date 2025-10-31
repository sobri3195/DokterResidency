import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Edit, Trash2, Shield, Mail } from 'lucide-react';
import './Common.css';

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: 'Dr. Ahmad Wijaya', email: 'ahmad@ppds.id', role: 'admin', status: 'active' },
    { id: 2, name: 'Dr. Siti Nurhaliza', email: 'siti@ppds.id', role: 'reviewer', status: 'active' },
    { id: 3, name: 'Dr. Budi Santoso', email: 'budi@ppds.id', role: 'editor', status: 'active' },
    { id: 4, name: 'Dr. Rina Kusuma', email: 'rina@ppds.id', role: 'proctor', status: 'active' },
    { id: 5, name: 'Dr. Dewi Lestari', email: 'dewi@ppds.id', role: 'editor', status: 'inactive' }
  ]);

  const getRoleBadge = (role) => {
    const colors = {
      admin: 'role-admin',
      editor: 'role-editor',
      reviewer: 'role-reviewer',
      proctor: 'role-proctor'
    };
    return colors[role] || 'role-editor';
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Users size={32} style={{ display: 'inline', marginRight: '0.5rem' }} />
            User Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Kelola akses dan peran pengguna sistem
          </motion.p>
        </div>
        <motion.button
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <UserPlus size={18} />
          Tambah Pengguna
        </motion.button>
      </div>

      <div className="stats-grid">
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-icon">
            <Shield size={24} />
          </div>
          <div>
            <h3>Total Admin</h3>
            <div className="stat-value">3</div>
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div>
            <h3>Total Editor</h3>
            <div className="stat-value">8</div>
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div>
            <h3>Total Reviewer</h3>
            <div className="stat-value">12</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="user-table-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <table className="user-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                <td>
                  <div className="user-info">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${user.name}&background=3B82F6&color=fff`}
                      alt={user.name}
                    />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${getRoleBadge(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.status}`}>
                    {user.status === 'active' ? 'Aktif' : 'Nonaktif'}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <button className="action-btn edit" title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className="action-btn delete" title="Hapus">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        className="info-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <h3>Peran & Hak Akses</h3>
        <div className="roles-grid">
          <div className="role-card">
            <Shield size={24} />
            <h4>Admin</h4>
            <p>Semua akses, kelola soal & user</p>
          </div>
          <div className="role-card">
            <Edit size={24} />
            <h4>Editor</h4>
            <p>Buat & ubah soal</p>
          </div>
          <div className="role-card">
            <Users size={24} />
            <h4>Reviewer</h4>
            <p>Validasi klinis & approve soal</p>
          </div>
          <div className="role-card">
            <Mail size={24} />
            <h4>Proctor</h4>
            <p>Awasi ujian & laporan</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserManagement;
