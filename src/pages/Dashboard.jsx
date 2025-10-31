import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ClipboardCheck, 
  Users, 
  TrendingUp,
  Plus,
  BarChart3,
  Award
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import './Dashboard.css';

const StatCard = ({ icon: Icon, title, value, change, delay }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}
    >
      <div className="stat-icon">
        <Icon size={24} />
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <div className="stat-value">{displayValue.toLocaleString()}</div>
        {change && (
          <div className={`stat-change ${change > 0 ? 'positive' : 'negative'}`}>
            <TrendingUp size={14} />
            <span>{Math.abs(change)}% dari bulan lalu</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const performanceData = [
    { month: 'Jan', score: 72 },
    { month: 'Feb', score: 75 },
    { month: 'Mar', score: 78 },
    { month: 'Apr', score: 76 },
    { month: 'May', score: 82 },
    { month: 'Jun', score: 85 }
  ];

  const questionQualityData = [
    { category: 'Sangat Mudah', count: 45 },
    { category: 'Mudah', count: 120 },
    { category: 'Sedang', count: 280 },
    { category: 'Sulit', count: 150 },
    { category: 'Sangat Sulit', count: 55 }
  ];

  const specializationData = [
    { name: 'Penyakit Dalam', value: 320, color: '#3B82F6' },
    { name: 'Bedah', value: 280, color: '#8B5CF6' },
    { name: 'Obstetri & Ginekologi', value: 250, color: '#10B981' },
    { name: 'Anak', value: 220, color: '#F59E0B' },
    { name: 'Lainnya', value: 180, color: '#EF4444' }
  ];

  const recentActivities = [
    { id: 1, type: 'add', user: 'Dr. Ahmad', action: 'menambahkan 10 soal baru', time: '2 jam lalu' },
    { id: 2, type: 'review', user: 'Dr. Siti', action: 'mereview 25 soal', time: '4 jam lalu' },
    { id: 3, type: 'exam', user: 'Dr. Budi', action: 'membuat ujian Sp.PD Batch 12', time: '5 jam lalu' },
    { id: 4, type: 'approve', user: 'Dr. Rina', action: 'menyetujui 15 soal', time: '1 hari lalu' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Selamat datang di DokterResidency Admin Panel
          </motion.p>
        </div>
        <motion.div
          className="header-actions"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={18} />
            Tambah Soal
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart3 size={18} />
            Lihat Analitik
          </motion.button>
        </motion.div>
      </div>

      <div className="stats-grid">
        <StatCard
          icon={BookOpen}
          title="Total Soal Aktif"
          value="1250"
          change={12}
          delay={0}
        />
        <StatCard
          icon={ClipboardCheck}
          title="Total Ujian"
          value="48"
          change={8}
          delay={0.1}
        />
        <StatCard
          icon={Users}
          title="Reviewer Aktif"
          value="24"
          change={5}
          delay={0.2}
        />
        <StatCard
          icon={Award}
          title="Peserta Aktif"
          value="856"
          change={15}
          delay={0.3}
        />
      </div>

      <div className="charts-grid">
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="chart-header">
            <h3>Performa Rata-rata Peserta</h3>
            <span className="chart-subtitle">6 Bulan Terakhir</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip 
                contentStyle={{ 
                  background: '#fff', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#3B82F6" 
                strokeWidth={3}
                fill="url(#colorScore)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="chart-header">
            <h3>Tingkat Kesulitan Soal</h3>
            <span className="chart-subtitle">Distribusi Berdasarkan Kategori</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={questionQualityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="category" stroke="#64748B" fontSize={12} />
              <YAxis stroke="#64748B" />
              <Tooltip 
                contentStyle={{ 
                  background: '#fff', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="count" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <div className="bottom-grid">
        <motion.div
          className="chart-card specialization-chart"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="chart-header">
            <h3>Distribusi Soal per Spesialisasi</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={specializationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {specializationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="activity-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="chart-header">
            <h3>Aktivitas Terbaru</h3>
          </div>
          <div className="activity-list">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="activity-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'add' && <Plus size={16} />}
                  {activity.type === 'review' && <ClipboardCheck size={16} />}
                  {activity.type === 'exam' && <BookOpen size={16} />}
                  {activity.type === 'approve' && <Award size={16} />}
                </div>
                <div className="activity-content">
                  <p>
                    <strong>{activity.user}</strong> {activity.action}
                  </p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
