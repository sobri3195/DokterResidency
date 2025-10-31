import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import './Common.css';

const AIGenerator = () => {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [formData, setFormData] = useState({
    specialty: '',
    topic: '',
    count: 10,
    type: 'MCQ',
    difficulty: 'Sedang'
  });

  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerating(true);
    
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
      
      setTimeout(() => {
        setGenerated(false);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Sparkles size={32} style={{ display: 'inline', marginRight: '0.5rem' }} />
            AI Question Generator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Generate soal ujian otomatis menggunakan AI
          </motion.p>
        </div>
      </div>

      <motion.div
        className="ai-generator-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <form onSubmit={handleGenerate}>
          <div className="form-grid">
            <div className="form-group">
              <label>Spesialisasi</label>
              <select
                value={formData.specialty}
                onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                required
              >
                <option value="">Pilih Spesialisasi</option>
                <option value="Penyakit Dalam">Penyakit Dalam</option>
                <option value="Bedah">Bedah</option>
                <option value="Obstetri & Ginekologi">Obstetri & Ginekologi</option>
                <option value="Anak">Anak</option>
                <option value="Neurologi">Neurologi</option>
              </select>
            </div>

            <div className="form-group">
              <label>Topik Klinis</label>
              <input
                type="text"
                placeholder="Contoh: Syok Sepsis, Diabetes Mellitus"
                value={formData.topic}
                onChange={(e) => setFormData({...formData, topic: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Jumlah Soal</label>
              <input
                type="number"
                min="1"
                max="50"
                value={formData.count}
                onChange={(e) => setFormData({...formData, count: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Tipe Soal</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="MCQ">Multiple Choice (MCQ)</option>
                <option value="EMQ">Extended Matching (EMQ)</option>
                <option value="Vignette">Vignette Klinis</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tingkat Kesulitan</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
              >
                <option value="Mudah">Mudah</option>
                <option value="Sedang">Sedang</option>
                <option value="Sulit">Sulit</option>
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary btn-large"
            disabled={generating}
            whileHover={{ scale: generating ? 1 : 1.02 }}
            whileTap={{ scale: generating ? 1 : 0.98 }}
          >
            {generating ? (
              <>
                <Loader size={20} className="spinner" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Generate Soal
              </>
            )}
          </motion.button>
        </form>

        <AnimatePresence>
          {generating && (
            <motion.div
              className="progress-indicator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3 }}
                />
              </div>
              <p>AI sedang membuat soal berdasarkan topik yang Anda pilih...</p>
            </motion.div>
          )}

          {generated && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <CheckCircle size={48} />
              <h3>Soal Berhasil Dibuat!</h3>
              <p>{formData.count} soal telah di-generate dan siap untuk direview</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="info-banner warning"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <AlertCircle size={24} />
        <div>
          <h3>Catatan Penting</h3>
          <p>Soal yang di-generate oleh AI akan otomatis diberi label "AI Generated – Review Needed" dan harus melalui proses review dan validasi klinis sebelum dipublikasikan.</p>
        </div>
      </motion.div>

      <motion.div
        className="info-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3>Fitur AI Generator</h3>
        <ul>
          <li>Generate soal berdasarkan topik klinis spesifik</li>
          <li>Format MCQ (5 opsi, 1 benar) dengan alasan kunci</li>
          <li>Referensi guideline terkini (≤5 tahun)</li>
          <li>Sesuai dengan blueprint kurikulum PPDS</li>
          <li>Integrasi dengan Evidence-Based Medicine</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AIGenerator;
