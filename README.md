# DokterResidency Admin Panel

Sistem berbasis web untuk mengelola soal ujian, membuat dan memantau simulasi CBT (Computer Based Test), menilai kualitas soal dan performa peserta, serta menyediakan analitik mendalam berbasis Evidence-Based Medicine (EBM).

## 🎯 Fitur Utama

### 1. 🏠 Dashboard Utama
- Ringkasan aktivitas & statistik sistem
- Total soal aktif, total ujian, jumlah reviewer, jumlah peserta aktif
- Grafik performa rata-rata peserta
- Tren kualitas soal (tingkat kesulitan, diskriminasi)
- Tombol aksi cepat dengan animasi interaktif

### 2. 📚 Bank Soal PPDS
- Manajemen soal ujian (MCQ, EMQ, Vignette klinis)
- Metadata lengkap: topik, subtopik, spesialisasi, tingkat kesulitan
- Status workflow: Draft → Review → Disetujui → Publikasi
- Pencarian & filter multi-kriteria
- Upload media penunjang soal
- Preview format CBT

### 3. 🧠 AI Question Generator
- Generate soal otomatis berbasis AI
- Sesuai blueprint kurikulum PPDS
- Dengan referensi guideline terkini
- Label otomatis "AI Generated – Review Needed"

### 4. 🧩 Blueprint & Exam Builder
- Buat ujian simulasi berbasis blueprint kurikulum
- Penentuan proporsi topik (Diagnostik, Terapi, EBM)
- Drag & drop soal ke blueprint
- Acak urutan soal & opsi
- Visualisasi diagram donat interaktif

### 5. ✅ Review dan Validasi Klinis
- Validasi soal berbasis Evidence-Based Medicine
- Komentar & penilaian reviewer (skala 1-5)
- Checklist otomatis kualitas soal
- Version control otomatis
- Mode double-blind review

### 6. 📊 Analitik Ujian & Soal
- p-value (kesulitan)
- Discrimination index (daya beda)
- Rata-rata waktu pengerjaan
- Rekomendasi revisi otomatis
- Visualisasi grafik interaktif (line, bar, radar, pie)

### 7. 👥 Manajemen Pengguna & Peran
- Role-based access control:
  - **Admin**: Semua akses, kelola soal & user
  - **Editor**: Buat & ubah soal
  - **Reviewer**: Validasi klinis & approve soal
  - **Proctor**: Awasi ujian & laporan integritas
- Log aktivitas pengguna

### 8. 🔔 Notifikasi & Log Aktivitas
- Notifikasi real-time
- Audit trail lengkap
- Toast notification dengan animasi

## 🛠️ Tech Stack

- **Framework**: React.js dengan Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion + Lottie
- **Charts**: Recharts
- **Icons**: Lucide React
- **Styling**: Custom CSS dengan CSS Variables
- **Authentication**: Context API (ready for Netlify Identity)
- **Hosting**: Netlify.app (ready to deploy)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ dan npm/yarn

### Installation

```bash
# Clone repository
git clone https://github.com/sobri3195/DokterResidency.git
cd DokterResidency

# Install dependencies
npm install

# Start development server
npm run dev
```

Server akan berjalan di `http://localhost:3000`

### Build untuk Production

```bash
npm run build
```

Output akan tersimpan di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## 📁 Struktur Folder

```
src/
├── components/         # Komponen reusable
│   └── Layout.jsx     # Layout utama dengan sidebar & header
├── contexts/          # React Context
│   └── AuthContext.jsx # Context untuk autentikasi
├── pages/             # Halaman aplikasi
│   ├── Dashboard.jsx
│   ├── BankSoal.jsx
│   ├── ExamBuilder.jsx
│   ├── Analytics.jsx
│   ├── ReviewValidation.jsx
│   ├── UserManagement.jsx
│   ├── AIGenerator.jsx
│   ├── Notifications.jsx
│   └── Login.jsx
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: #3B82F6 (Blue)
- **Secondary**: #8B5CF6 (Purple)
- **Success**: #10B981 (Green)
- **Warning**: #F59E0B (Orange)
- **Danger**: #EF4444 (Red)
- **Background**: #F8FAFC (Light Gray)
- **Surface**: #FFFFFF (White)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🔐 Authentication

**Authentication Disabled** - Direct access mode enabled. The application now provides direct access to the admin panel without requiring login. A default admin user is automatically configured for all sessions.

## 🌐 Deployment ke Netlify

1. Login ke Netlify
2. Connect repository GitHub
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

Atau gunakan Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📊 Evidence-Based Analytics

Semua metrik berdasarkan standar psikometri:
- **p-value**: Proporsi peserta yang menjawab benar (ideal: 0.5-0.7)
- **Discrimination Index**: Kemampuan soal membedakan peserta (ideal: > 0.3)
- **Reliability**: Konsistensi hasil pengukuran (ideal: > 0.7)
- **Validity**: Kesesuaian dengan tujuan pembelajaran (ideal: > 0.8)

## 🎯 Roadmap

- [ ] Integrasi AI Generator dengan OpenAI API
- [ ] Real-time collaboration untuk review
- [ ] Export soal ke PDF/DOCX
- [ ] Import soal dari Excel/CSV
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Mobile app (React Native)
- [ ] Integrasi dengan LMS

## 📄 License

ISC

## 👥 Authors

DokterResidency Team

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

Untuk bantuan dan pertanyaan, hubungi tim support.

---

**Built with ❤️ for Indonesian Medical Residents**
