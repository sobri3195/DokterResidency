import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  FileText
} from 'lucide-react';
import './BankSoal.css';

const mockQuestions = [
  {
    id: 1,
    title: 'Diagnosis dan Penatalaksanaan Syok Sepsis',
    specialty: 'Penyakit Dalam',
    subtopic: 'Emergency Medicine',
    difficulty: 'Sedang',
    status: 'approved',
    author: 'Dr. Ahmad',
    createdAt: '2024-01-15',
    type: 'MCQ'
  },
  {
    id: 2,
    title: 'Manajemen Diabetes Mellitus Tipe 2',
    specialty: 'Penyakit Dalam',
    subtopic: 'Endokrinologi',
    difficulty: 'Mudah',
    status: 'review',
    author: 'Dr. Siti',
    createdAt: '2024-01-14',
    type: 'MCQ'
  },
  {
    id: 3,
    title: 'Penanganan Trauma Kepala Berat',
    specialty: 'Bedah',
    subtopic: 'Bedah Saraf',
    difficulty: 'Sulit',
    status: 'draft',
    author: 'Dr. Budi',
    createdAt: '2024-01-13',
    type: 'Vignette'
  },
  {
    id: 4,
    title: 'Diagnosis Preeklampsia dan Eklampsia',
    specialty: 'Obstetri & Ginekologi',
    subtopic: 'Maternal Fetal Medicine',
    difficulty: 'Sedang',
    status: 'approved',
    author: 'Dr. Rina',
    createdAt: '2024-01-12',
    type: 'EMQ'
  },
  {
    id: 5,
    title: 'Tatalaksana Pneumonia pada Anak',
    specialty: 'Anak',
    subtopic: 'Respirologi',
    difficulty: 'Mudah',
    status: 'approved',
    author: 'Dr. Dewi',
    createdAt: '2024-01-11',
    type: 'MCQ'
  }
];

const BankSoal = () => {
  const [questions, setQuestions] = useState(mockQuestions);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSpecialty, setFilterSpecialty] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const getStatusColor = (status) => {
    const colors = {
      draft: 'status-draft',
      review: 'status-review',
      approved: 'status-approved'
    };
    return colors[status] || 'status-draft';
  };

  const getStatusIcon = (status) => {
    const icons = {
      draft: Clock,
      review: FileText,
      approved: CheckCircle
    };
    const Icon = icons[status] || Clock;
    return <Icon size={16} />;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Mudah': 'difficulty-easy',
      'Sedang': 'difficulty-medium',
      'Sulit': 'difficulty-hard'
    };
    return colors[difficulty] || 'difficulty-medium';
  };

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || q.status === filterStatus;
    const matchesSpecialty = filterSpecialty === 'all' || q.specialty === filterSpecialty;
    return matchesSearch && matchesStatus && matchesSpecialty;
  });

  const specialties = [...new Set(questions.map(q => q.specialty))];

  return (
    <div className="bank-soal">
      <div className="page-header">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Bank Soal PPDS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Kelola semua soal ujian dan latihan
          </motion.p>
        </div>
        <motion.button
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Plus size={18} />
          Tambah Soal Baru
        </motion.button>
      </div>

      <motion.div
        className="filters-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Cari soal berdasarkan judul atau spesialisasi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <div className="filter-item">
            <Filter size={16} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Semua Status</option>
              <option value="draft">Draft</option>
              <option value="review">Review</option>
              <option value="approved">Disetujui</option>
            </select>
          </div>

          <div className="filter-item">
            <select
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
            >
              <option value="all">Semua Spesialisasi</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="questions-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {filteredQuestions.map((question, index) => (
          <motion.div
            key={question.id}
            className="question-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}
          >
            <div className="question-header">
              <div className="question-badges">
                <span className={`status-badge ${getStatusColor(question.status)}`}>
                  {getStatusIcon(question.status)}
                  <span>{question.status === 'draft' ? 'Draft' : question.status === 'review' ? 'Review' : 'Disetujui'}</span>
                </span>
                <span className={`difficulty-badge ${getDifficultyColor(question.difficulty)}`}>
                  {question.difficulty}
                </span>
              </div>
              <span className="question-type">{question.type}</span>
            </div>

            <h3 className="question-title">{question.title}</h3>

            <div className="question-meta">
              <div className="meta-item">
                <strong>Spesialisasi:</strong> {question.specialty}
              </div>
              <div className="meta-item">
                <strong>Subtopik:</strong> {question.subtopic}
              </div>
              <div className="meta-item">
                <strong>Pembuat:</strong> {question.author}
              </div>
              <div className="meta-item">
                <strong>Dibuat:</strong> {new Date(question.createdAt).toLocaleDateString('id-ID')}
              </div>
            </div>

            <div className="question-actions">
              <motion.button
                className="action-btn view"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedQuestion(question)}
              >
                <Eye size={16} />
              </motion.button>
              <motion.button
                className="action-btn edit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Edit size={16} />
              </motion.button>
              <motion.button
                className="action-btn delete"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Trash2 size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredQuestions.length === 0 && (
        <motion.div
          className="empty-state"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <FileText size={64} />
          <h3>Tidak ada soal ditemukan</h3>
          <p>Coba ubah filter atau kata kunci pencarian</p>
        </motion.div>
      )}

      <AnimatePresence>
        {showAddModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Tambah Soal Baru</h2>
              <p>Fitur ini akan segera hadir...</p>
              <button
                className="btn btn-primary"
                onClick={() => setShowAddModal(false)}
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BankSoal;
