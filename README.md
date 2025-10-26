# SITTA - Sistem Informasi Tracking & Tracing Aset
## Tugas Praktik 1 - Universitas Terbuka

### Deskripsi
SITTA adalah aplikasi berbasis web untuk mengelola dan melacak distribusi bahan ajar Universitas Terbuka. Aplikasi ini dibuat dengan fokus pada Front-End menggunakan HTML, CSS, dan JavaScript tanpa backend/database. Data disimpan dalam file JavaScript (data.js).

### Struktur Folder
```
Tugas1/
├── css/
│   └── style.css          # File styling untuk semua halaman
├── js/
│   ├── data.js            # Data dummy (users, bahan ajar, tracking)
│   ├── login.js           # Logic untuk halaman login
│   ├── dashboard.js       # Logic untuk halaman dashboard
│   ├── tracking.js        # Logic untuk halaman tracking
│   └── stok.js            # Logic untuk halaman stok
├── img/                   # Folder untuk gambar cover bahan ajar
│   ├── kepemimpinan.jpg
│   ├── manajemen_keuangan.jpg
│   ├── mikrobiologi.jpg
│   ├── paud_perkembangan.jpeg
│   └── pengantar_komunikasi.jpg
├── login.html             # Halaman login
├── dashboard.html         # Halaman dashboard/menu utama
├── tracking.html          # Halaman tracking pengiriman
├── stok.html              # Halaman informasi stok bahan ajar
├── laporan.html           # Halaman laporan (placeholder)
├── histori.html           # Halaman histori transaksi (placeholder)
└── README.md              # Dokumentasi proyek
```

### Fitur Utama

#### 1. Halaman Login (login.html)
- Input email dan password
- Validasi login dengan data dummy
- Alert jika email/password salah
- Modal "Lupa Password" dengan form reset
- Modal "Daftar" untuk registrasi akun baru
- Otomatis redirect ke dashboard jika sudah login

**Akun untuk Testing:**
- Email: `rina@ut.ac.id` | Password: `rina123`
- Email: `agus@ut.ac.id` | Password: `agus123`
- Email: `siti@ut.ac.id` | Password: `siti123`
- Email: `doni@ut.ac.id` | Password: `doni123`
- Email: `admin@ut.ac.id` | Password: `admin123`

#### 2. Dashboard Menu (dashboard.html)
- Greeting berdasarkan waktu lokal (Pagi/Siang/Sore/Malam)
- Tampilan tanggal dan waktu real-time
- Informasi user yang login (nama, role, lokasi)
- Menu navigasi ke:
  - Informasi Bahan Ajar
  - Tracking Pengiriman
  - Laporan
  - Histori Transaksi
- Tombol Logout

#### 3. Tracking Pengiriman (tracking.html)
- Input nomor Delivery Order (DO)
- Tampilan detail pengiriman:
  - Nomor DO
  - Nama penerima
  - Status pengiriman
  - Ekspedisi
  - Tanggal kirim
  - Jenis paket
  - Total pembayaran
- Progress bar pengiriman
- Timeline perjalanan paket
- Alert jika nomor DO tidak ditemukan

**Nomor DO untuk Testing:**
- `2023001234` - Status: Dalam Perjalanan
- `2023005678` - Status: Diterima

#### 4. Informasi Stok Bahan Ajar (stok.html)
- Menampilkan data bahan ajar secara dinamis dari data.js
- Tampilan card dengan informasi:
  - Cover buku
  - Nama bahan ajar
  - Kode barang
  - Kode lokasi
  - Jenis dan edisi
  - Jumlah stok
- Fitur tambah bahan ajar baru menggunakan JavaScript DOM
- Form validasi untuk data baru
- Animasi highlight untuk item baru
- Counter total bahan ajar

### Teknologi yang Digunakan
- **HTML5** - Struktur halaman
- **CSS3** - Styling dan layout (Grid, Flexbox, Animations)
- **JavaScript** - Logic dan interaktivitas
- **LocalStorage** - Menyimpan session user

### Cara Menjalankan
1. Extract folder Tugas1 ke lokasi yang diinginkan
2. Buka file `login.html` menggunakan web browser (Chrome, Firefox, Edge, dll)
3. Login menggunakan salah satu akun di atas
4. Navigasi menggunakan menu yang tersedia

### Catatan Penting
- Aplikasi ini tidak menggunakan backend/database
- Data disimpan dalam file `js/data.js`
- Session user disimpan di LocalStorage browser
- Perubahan data hanya bersifat sementara (hilang saat reload)
- Untuk production, data perlu disimpan di database

### Browser Support
- Google Chrome (Recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

### Credits
Dibuat untuk memenuhi Tugas Praktik 1
Universitas Terbuka

