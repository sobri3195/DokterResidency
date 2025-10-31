import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, MessageSquare, CheckCircle, XCircle, Clock } from 'lucide-react';
import './Common.css';

const ReviewValidation = () => {
  const pendingReviews = [
    { id: 1, title: 'Diagnosis Syok Sepsis', reviewer: 'Dr. Ahmad', status: 'pending', priority: 'high' },
    { id: 2, title: 'Manajemen Diabetes', reviewer: 'Dr. Siti', status: 'in-progress', priority: 'medium' },
    { id: 3, title: 'Trauma Kepala Berat', reviewer: 'Belum ditugaskan', status: 'pending', priority: 'high' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <CheckSquare size={32} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Review & Validasi Klinis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Pastikan setiap soal valid, akurat, dan sesuai Evidence-Based Medicine
          </motion.p>
        </div>
      </div>

      <div className="stats-grid">
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div>
            <h3>Menunggu Review</h3>
            <div className="stat-value">18</div>
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="stat-icon">
            <MessageSquare size={24} />
          </div>
          <div>
            <h3>Dalam Proses</h3>
            <div className="stat-value">7</div>
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>
          <div>
            <h3>Disetujui Bulan Ini</h3>
            <div className="stat-value">45</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="review-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3>Soal yang Perlu Review</h3>
        {pendingReviews.map((item, index) => (
          <motion.div
            key={item.id}
            className="review-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <div className="review-content">
              <h4>{item.title}</h4>
              <p>Reviewer: {item.reviewer}</p>
            </div>
            <div className="review-meta">
              <span className={`priority-badge ${item.priority}`}>
                {item.priority === 'high' ? 'Prioritas Tinggi' : 'Prioritas Sedang'}
              </span>
              <span className={`status-badge ${item.status}`}>
                {item.status === 'pending' ? 'Menunggu' : 'Dalam Proses'}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="info-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h3>Checklist Validasi Soal</h3>
        <ul>
          <li><CheckCircle size={16} /> Kejelasan stem (pertanyaan)</li>
          <li><CheckCircle size={16} /> Homogenitas opsi jawaban</li>
          <li><CheckCircle size={16} /> Relevansi klinis</li>
          <li><CheckCircle size={16} /> Kesesuaian referensi (≤5 tahun)</li>
          <li><CheckCircle size={16} /> Tidak ada clue untuk jawaban</li>
          <li><CheckCircle size={16} /> Format sesuai blueprint</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ReviewValidation;
