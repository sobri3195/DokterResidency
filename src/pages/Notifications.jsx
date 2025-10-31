import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import './Common.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Soal Disetujui',
      message: 'Dr. Ahmad menyetujui 10 soal pada topik Syok Sepsis',
      time: '2 jam lalu',
      read: false
    },
    {
      id: 2,
      type: 'info',
      title: 'Soal Baru Ditambahkan',
      message: 'Dr. Siti menambahkan 5 soal baru untuk spesialisasi Penyakit Dalam',
      time: '4 jam lalu',
      read: false
    },
    {
      id: 3,
      type: 'warning',
      title: 'Review Diperlukan',
      message: '15 soal menunggu review dari Anda',
      time: '5 jam lalu',
      read: false
    },
    {
      id: 4,
      type: 'success',
      title: 'Ujian Dipublikasikan',
      message: 'Ujian Sp.PD Batch Desember 2024 telah dipublikasikan',
      time: '1 hari lalu',
      read: true
    },
    {
      id: 5,
      type: 'info',
      title: 'Pengguna Baru',
      message: 'Dr. Budi Santoso bergabung sebagai Editor',
      time: '2 hari lalu',
      read: true
    }
  ]);

  const getIcon = (type) => {
    const icons = {
      success: CheckCircle,
      warning: AlertCircle,
      info: Info
    };
    const Icon = icons[type] || Info;
    return <Icon size={20} />;
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Bell size={32} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Notifikasi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {unreadCount > 0 ? `${unreadCount} notifikasi belum dibaca` : 'Semua notifikasi sudah dibaca'}
          </motion.p>
        </div>
      </div>

      <motion.div
        className="notifications-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {notifications.map((notif, index) => (
          <motion.div
            key={notif.id}
            className={`notification-item ${notif.type} ${notif.read ? 'read' : 'unread'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            whileHover={{ x: 4 }}
          >
            <div className="notification-icon">
              {getIcon(notif.type)}
            </div>
            <div className="notification-content">
              <h4>{notif.title}</h4>
              <p>{notif.message}</p>
              <span className="notification-time">{notif.time}</span>
            </div>
            <div className="notification-actions">
              {!notif.read && (
                <motion.button
                  className="mark-read-btn"
                  onClick={() => markAsRead(notif.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Tandai sudah dibaca"
                >
                  <CheckCircle size={16} />
                </motion.button>
              )}
              <motion.button
                className="delete-btn"
                onClick={() => deleteNotification(notif.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Hapus notifikasi"
              >
                <X size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {notifications.length === 0 && (
        <motion.div
          className="empty-state"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Bell size={64} />
          <h3>Tidak ada notifikasi</h3>
          <p>Anda akan menerima notifikasi untuk aktivitas penting di sini</p>
        </motion.div>
      )}
    </div>
  );
};

export default Notifications;
