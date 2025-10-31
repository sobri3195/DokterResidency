import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Target, Award } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import './Common.css';

const Analytics = () => {
  const questionQualityData = [
    { name: 'p-value', value: 0.65 },
    { name: 'Discrimination', value: 0.42 },
    { name: 'Reliability', value: 0.78 },
    { name: 'Validity', value: 0.85 },
    { name: 'Difficulty', value: 0.58 }
  ];

  const performanceTrendData = [
    { month: 'Jan', avgScore: 72, passRate: 68 },
    { month: 'Feb', avgScore: 75, passRate: 72 },
    { month: 'Mar', avgScore: 78, passRate: 76 },
    { month: 'Apr', avgScore: 76, passRate: 74 },
    { month: 'May', avgScore: 82, passRate: 80 },
    { month: 'Jun', avgScore: 85, passRate: 82 }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <BarChart3 size={32} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Analytics Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Analitik mendalam untuk kualitas soal dan performa peserta
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
            <Target size={24} />
          </div>
          <div>
            <h3>Rata-rata p-value</h3>
            <div className="stat-value">0.65</div>
            <p className="stat-label">Tingkat kesulitan ideal</p>
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div>
            <h3>Discrimination Index</h3>
            <div className="stat-value">0.42</div>
            <p className="stat-label">Daya beda soal</p>
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="stat-icon">
            <Award size={24} />
          </div>
          <div>
            <h3>Rata-rata Skor</h3>
            <div className="stat-value">78.5</div>
            <p className="stat-label">Performa peserta</p>
          </div>
        </motion.div>
      </div>

      <div className="charts-grid">
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Tren Performa 6 Bulan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip />
              <Line type="monotone" dataKey="avgScore" stroke="#3B82F6" strokeWidth={3} name="Rata-rata Skor" />
              <Line type="monotone" dataKey="passRate" stroke="#10B981" strokeWidth={3} name="Pass Rate %" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Kualitas Soal (Radar)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={questionQualityData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis angle={90} domain={[0, 1]} />
              <Radar name="Quality" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        className="info-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3>Evidence-Based Analytics</h3>
        <p>Semua metrik didasarkan pada standar psikometri dan Evidence-Based Medicine (EBM)</p>
        <ul>
          <li><strong>p-value:</strong> Proporsi peserta yang menjawab benar (ideal: 0.5-0.7)</li>
          <li><strong>Discrimination Index:</strong> Kemampuan soal membedakan peserta pintar dan kurang (ideal: &gt; 0.3)</li>
          <li><strong>Reliability:</strong> Konsistensi hasil pengukuran (ideal: &gt; 0.7)</li>
          <li><strong>Validity:</strong> Kesesuaian soal dengan tujuan pembelajaran (ideal: &gt; 0.8)</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Analytics;
