import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Plus, Save, Eye } from 'lucide-react';
import './Common.css';

const ExamBuilder = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ClipboardList size={32} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Blueprint & Exam Builder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Buat dan kelola ujian simulasi berbasis blueprint kurikulum PPDS
          </motion.p>
        </div>
      </div>

      <motion.div
        className="feature-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="feature-card">
          <Plus size={48} />
          <h3>Buat Ujian Baru</h3>
          <p>Pilih spesialisasi, atur proporsi topik, dan tentukan durasi ujian</p>
        </div>

        <div className="feature-card">
          <ClipboardList size={48} />
          <h3>Blueprint Manager</h3>
          <p>Atur distribusi soal berdasarkan blueprint kurikulum</p>
        </div>

        <div className="feature-card">
          <Eye size={48} />
          <h3>Preview Ujian</h3>
          <p>Lihat tampilan ujian sebelum dipublikasikan</p>
        </div>

        <div className="feature-card">
          <Save size={48} />
          <h3>Template Ujian</h3>
          <p>Simpan dan gunakan kembali template ujian</p>
        </div>
      </motion.div>

      <motion.div
        className="info-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3>Fitur Blueprint & Exam Builder</h3>
        <ul>
          <li>Drag & drop soal ke blueprint</li>
          <li>Proporsi topik otomatis (Diagnostik, Terapi, EBM)</li>
          <li>Acak urutan soal dan opsi jawaban</li>
          <li>Integrasi dengan simulasi peserta</li>
          <li>Visualisasi blueprint dengan diagram donat interaktif</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ExamBuilder;
