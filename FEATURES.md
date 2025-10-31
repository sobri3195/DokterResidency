# Features Documentation - DokterResidency Admin Panel

## 📋 Daftar Lengkap Fitur

### 1. 🏠 Dashboard Utama

**Path:** `/`

**Fitur:**
- **Statistik Real-time** dengan count-up animation
  - Total Soal Aktif: 1,250 soal
  - Total Ujian: 48 ujian
  - Reviewer Aktif: 24 reviewer
  - Peserta Aktif: 856 peserta
  
- **Grafik Performa Peserta**
  - Area chart dengan gradient
  - Data 6 bulan terakhir
  - Interactive hover tooltips
  
- **Analisis Tingkat Kesulitan Soal**
  - Bar chart distribusi soal
  - Kategori: Sangat Mudah, Mudah, Sedang, Sulit, Sangat Sulit
  
- **Distribusi per Spesialisasi**
  - Pie chart interaktif
  - 5 spesialisasi utama: Penyakit Dalam, Bedah, ObGyn, Anak, Lainnya
  
- **Aktivitas Terbaru**
  - Real-time feed aktivitas pengguna
  - Timeline dengan icon status
  - Informasi waktu relatif
  
- **Quick Actions**
  - Tambah Soal Baru
  - Lihat Analitik

**Animasi:**
- Count-up animation untuk angka statistik
- Fade-in dan grow animation untuk grafik
- Hover effects pada kartu
- Smooth transitions antar elemen

---

### 2. 📚 Bank Soal PPDS

**Path:** `/bank-soal`

**Fitur:**
- **Search & Filter**
  - Pencarian real-time berdasarkan judul/spesialisasi
  - Filter by status: Draft, Review, Disetujui
  - Filter by spesialisasi
  
- **Manajemen Soal**
  - Card-based layout untuk setiap soal
  - Status badges dengan color coding
  - Difficulty badges (Mudah, Sedang, Sulit)
  - Type tags (MCQ, EMQ, Vignette)
  
- **Metadata Soal:**
  - Judul soal
  - Spesialisasi & subtopik
  - Tingkat kesulitan
  - Status workflow
  - Pembuat soal
  - Tanggal dibuat
  
- **Actions:**
  - View (preview soal)
  - Edit (ubah soal)
  - Delete (hapus soal)
  
- **Modal Tambah Soal**
  - Form untuk menambah soal baru (placeholder)

**Status Workflow:**
1. **Draft** (Abu-abu) - Soal baru dibuat
2. **Review** (Oranye) - Menunggu validasi
3. **Disetujui** (Hijau) - Ready untuk ujian

**Animasi:**
- Staggered card animation saat load
- Hover lift effect pada cards
- Scale animation pada action buttons
- Modal fade-in/out
- Empty state animation

---

### 3. 🧩 Blueprint & Exam Builder

**Path:** `/exam-builder`

**Fitur:**
- **Buat Ujian Baru**
  - Pilih spesialisasi
  - Tentukan proporsi topik
  - Atur durasi dan jumlah soal
  
- **Blueprint Manager**
  - Drag & drop soal ke blueprint
  - Visualisasi diagram donat
  - Auto-calculate proporsi topik
  
- **Template Ujian**
  - Save dan reuse template
  - Library template tersimpan
  
- **Preview Mode**
  - Lihat tampilan ujian sebelum publish
  - Test flow ujian
  
**Proporsi Topik:**
- Diagnostik: 30%
- Terapi: 40%
- EBM: 30%

**Features Coming Soon:**
- Drag & drop interface
- Real-time blueprint visualization
- Question pool management
- Randomization settings

---

### 4. 📊 Analytics Dashboard

**Path:** `/analytics`

**Fitur:**
- **Statistik Kualitas Soal**
  - p-value (tingkat kesulitan)
  - Discrimination Index (daya beda)
  - Rata-rata skor peserta
  
- **Grafik Tren Performa**
  - Line chart 6 bulan
  - Rata-rata skor vs Pass rate
  - Trend analysis
  
- **Radar Chart Kualitas**
  - 5 dimensi kualitas soal:
    - p-value
    - Discrimination
    - Reliability
    - Validity
    - Difficulty
    
- **Evidence-Based Metrics**
  - Standards psikometri internasional
  - Rekomendasi improvement otomatis
  
**Ideal Values:**
- p-value: 0.5-0.7
- Discrimination: > 0.3
- Reliability: > 0.7
- Validity: > 0.8

**Animasi:**
- Charts dengan grow-in animation
- Interactive hover tooltips
- Smooth data transitions

---

### 5. ✅ Review & Validasi Klinis

**Path:** `/review`

**Fitur:**
- **Dashboard Review**
  - Menunggu Review: 18 soal
  - Dalam Proses: 7 soal
  - Disetujui Bulan Ini: 45 soal
  
- **Review Queue**
  - List soal yang perlu direview
  - Priority badges (High, Medium, Low)
  - Assignment ke reviewer
  
- **Validation Checklist:**
  - ✓ Kejelasan stem (pertanyaan)
  - ✓ Homogenitas opsi jawaban
  - ✓ Relevansi klinis
  - ✓ Kesesuaian referensi (≤5 tahun)
  - ✓ Tidak ada clue untuk jawaban
  - ✓ Format sesuai blueprint
  
- **Review Features:**
  - Rating system (1-5 scale)
  - Komentar dan feedback
  - Version control otomatis
  - Revision history
  
**Workflow:**
1. Soal masuk queue review
2. Assignment ke reviewer
3. Review & feedback
4. Revisi (jika perlu)
5. Approval
6. Publikasi

---

### 6. 👥 User Management

**Path:** `/users`

**Fitur:**
- **User Table**
  - List semua pengguna
  - Profile picture & info
  - Role badges
  - Status (Active/Inactive)
  
- **Roles & Permissions:**
  1. **Admin** - Full access
     - Kelola soal & user
     - Approve/reject
     - System settings
     
  2. **Editor** - Content creation
     - Buat & edit soal
     - Draft management
     
  3. **Reviewer** - Quality control
     - Validasi klinis
     - Approve soal
     - Feedback
     
  4. **Proctor** - Exam monitoring
     - Awasi ujian
     - Laporan integritas
     - Analytics view
     
- **User Actions:**
  - Tambah pengguna baru
  - Edit user profile
  - Change role
  - Deactivate user
  - View activity log
  
- **Invitation System**
  - Email invitation
  - Role pre-assignment
  - Welcome workflow

**Statistics:**
- Total Admin: 3
- Total Editor: 8
- Total Reviewer: 12
- Total Proctor: 5

---

### 7. 🧠 AI Question Generator

**Path:** `/ai-generator`

**Fitur:**
- **AI-Powered Generation**
  - Generate soal otomatis
  - Berbasis topik klinis
  - Sesuai kurikulum PPDS
  
- **Input Parameters:**
  - Spesialisasi (dropdown)
  - Topik Klinis (text input)
  - Jumlah Soal (1-50)
  - Tipe Soal (MCQ, EMQ, Vignette)
  - Tingkat Kesulitan (Mudah, Sedang, Sulit)
  
- **Generation Process:**
  - Progress bar animation
  - Real-time status updates
  - Confetti celebration on success
  
- **Output:**
  - Soal dengan 5 opsi (1 benar)
  - Alasan kunci jawaban
  - Referensi guideline terkini
  - Auto-label "AI Generated – Review Needed"
  
**Important:**
- Semua soal AI harus direview
- Validasi klinis wajib
- Tidak langsung dipublikasikan

**Animasi:**
- Progress bar dengan gradient
- Spinner animation saat generate
- Success confetti effect
- Smooth form transitions

---

### 8. 🔔 Notifikasi & Activity Log

**Path:** `/notifications`

**Fitur:**
- **Notification Types:**
  - Success (hijau) - Approval, publish
  - Warning (oranye) - Review needed
  - Info (biru) - General updates
  
- **Notification Content:**
  - Title
  - Message
  - Timestamp relatif
  - Read/unread status
  
- **Actions:**
  - Mark as read
  - Delete notification
  - Clear all
  
- **Badge Counter**
  - Unread count di header
  - Real-time updates
  
**Examples:**
- "Dr. Ahmad menyetujui 10 soal pada topik Syok Sepsis"
- "15 soal menunggu review dari Anda"
- "Ujian Sp.PD Batch Desember 2024 telah dipublikasikan"

**Animasi:**
- Slide-in toast notifications
- Fade-out on dismiss
- Badge pulse animation
- Hover effects

---

### 9. 🔐 Authentication System

**Path:** `/login`

**Fitur:**
- **Login Form**
  - Email input
  - Password input
  - Role selection
  - Remember me (optional)
  
- **Demo Mode**
  - Accept any email/password
  - Instant login
  - No verification needed
  
- **Security (Production Ready):**
  - Integrate Netlify Identity
  - OAuth providers (Google, GitHub)
  - Session management
  - Auto-logout on inactivity
  
- **User Profile**
  - Avatar generation
  - Display name
  - Role badge
  - Logout option

**Animasi:**
- Smooth card animation on load
- Floating background circles
- Input focus effects
- Button hover/tap effects
- Error message slide-in

---

## 🎨 Design System

### Color Palette
```css
--primary: #3B82F6 (Blue)
--primary-dark: #2563EB
--secondary: #8B5CF6 (Purple)
--success: #10B981 (Green)
--warning: #F59E0B (Orange)
--danger: #EF4444 (Red)
--info: #06B6D4 (Cyan)
--background: #F8FAFC
--surface: #FFFFFF
--text-primary: #1E293B
--text-secondary: #64748B
--border: #E2E8F0
```

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**:
  - H1: 2rem
  - H2: 1.5rem
  - H3: 1.25rem
  - Body: 1rem
  - Small: 0.875rem

### Spacing Scale
- 0.25rem (4px)
- 0.5rem (8px)
- 0.75rem (12px)
- 1rem (16px)
- 1.5rem (24px)
- 2rem (32px)

### Border Radius
- Small: 6px
- Medium: 12px
- Large: 16px
- XLarge: 24px

### Shadows
- Subtle: 0 1px 3px rgba(0,0,0,0.1)
- Medium: 0 4px 6px rgba(0,0,0,0.1)
- Large: 0 10px 15px rgba(0,0,0,0.1)

---

## 🎬 Animations Library

### Framer Motion Variants
- **Fade In**: opacity 0 → 1
- **Slide Up**: y: 20 → 0
- **Slide In**: x: -20 → 0
- **Scale**: scale: 0.9 → 1
- **Stagger**: delay: index * 0.05

### Hover Effects
- Scale: 1.02-1.05
- Lift: translateY(-4px)
- Shadow increase
- Color shift

### Interactive Elements
- Buttons: whileHover, whileTap
- Cards: hover lift
- Icons: rotate, pulse
- Badges: subtle glow

---

## 🚀 Performance Features

- **Code Splitting**: React.lazy (ready)
- **Image Optimization**: WebP support
- **Lazy Loading**: Components on-demand
- **Caching**: Service worker ready
- **CDN**: Netlify CDN
- **Compression**: Gzip/Brotli

---

## 📱 Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Responsive Features
- Collapsible sidebar on mobile
- Touch-friendly buttons
- Swipe gestures ready
- Adaptive grid layouts
- Mobile-optimized tables

---

**Untuk pertanyaan atau request fitur tambahan, silakan buka issue di GitHub repository.**
