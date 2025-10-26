# PANDUAN CEPAT PENGGUNAAN SITTA

## Langkah-langkah Menjalankan Aplikasi

### 1. Persiapan
- Pastikan semua file sudah ter-extract dengan struktur folder yang benar
- Pastikan folder `img` berisi gambar-gambar cover bahan ajar
- Buka file menggunakan web browser modern (Chrome, Firefox, Edge)

### 2. Login
1. Buka file `login.html` atau `index.html`
2. Gunakan salah satu akun berikut:

   **Akun Testing:**
   ```
   Email: rina@ut.ac.id
   Password: rina123
   
   Email: agus@ut.ac.id
   Password: agus123
   
   Email: admin@ut.ac.id
   Password: admin123
   ```

3. Klik tombol **Login**
4. Jika berhasil, akan diarahkan ke Dashboard

### 3. Fitur-fitur yang Tersedia

#### A. Dashboard
- Menampilkan greeting berdasarkan waktu (Pagi/Siang/Sore/Malam)
- Menu navigasi ke semua fitur
- Informasi user yang sedang login

#### B. Informasi Stok Bahan Ajar
1. Klik menu **"Informasi Bahan Ajar"**
2. Lihat daftar bahan ajar yang tersedia
3. Untuk menambah bahan ajar baru:
   - Klik tombol **"+ Tambah Bahan Ajar"**
   - Isi semua field yang diperlukan:
     * Kode Lokasi (contoh: 0JKT01)
     * Kode Barang (contoh: EKMA4216)
     * Nama Barang (contoh: Manajemen Keuangan)
     * Jenis Barang (contoh: BMP)
     * Edisi (contoh: 1)
     * Stok (contoh: 100)
     * URL Cover (opsional)
   - Klik **"Simpan"**
   - Bahan ajar baru akan muncul di grid

#### C. Tracking Pengiriman
1. Klik menu **"Tracking Pengiriman"**
2. Masukkan Nomor Delivery Order (DO)
   
   **Nomor DO untuk testing:**
   ```
   2023001234  (Status: Dalam Perjalanan)
   2023005678  (Status: Diterima)
   ```

3. Klik tombol **"Cari"**
4. Sistem akan menampilkan:
   - Detail pengiriman lengkap
   - Progress bar pengiriman
   - Timeline perjalanan paket

#### D. Modal Lupa Password
1. Di halaman login, klik **"Lupa Password?"**
2. Masukkan email terdaftar
3. Sistem akan menampilkan konfirmasi

#### E. Modal Daftar Akun
1. Di halaman login, klik **"Daftar"**
2. Isi form pendaftaran:
   - Nama Lengkap
   - Email
   - Password
   - Role (pilih dari dropdown)
   - Lokasi
3. Klik **"Daftar"**
4. Login dengan akun baru

### 4. Logout
- Klik tombol **"Logout"** di pojok kanan atas
- Konfirmasi logout
- Sistem akan menghapus session dan kembali ke halaman login

## Tips Penggunaan

### Keyboard Shortcuts
- **Enter** di form login = Submit
- **Escape** = Tutup modal (Lupa Password/Daftar)

### Troubleshooting

**Problem: Login tidak berhasil**
- Pastikan email dan password sesuai dengan data di `js/data.js`
- Periksa console browser untuk error (F12)

**Problem: Gambar tidak muncul**
- Pastikan file gambar ada di folder `img/`
- Periksa nama file sesuai dengan yang ada di `js/data.js`

**Problem: Data hilang setelah refresh**
- Ini normal karena data disimpan di memory JavaScript
- Untuk persistent data, perlu menggunakan LocalStorage atau database

**Problem: Tracking tidak ditemukan**
- Pastikan nomor DO yang dimasukkan benar
- Hanya ada 2 nomor DO di data dummy: 2023001234 dan 2023005678

### Fitur JavaScript DOM
Aplikasi ini menggunakan JavaScript DOM untuk:
- Manipulasi elemen HTML secara dinamis
- Menambah/menghapus elemen
- Event handling
- Form validation
- Modal popup
- LocalStorage untuk session management

### Contoh Penggunaan Lengkap

1. **Buka aplikasi** → `index.html`
2. **Login** dengan `admin@ut.ac.id` / `admin123`
3. **Dashboard** akan menampilkan greeting dan menu
4. **Klik "Informasi Bahan Ajar"** → Lihat 5 bahan ajar
5. **Tambah bahan ajar baru:**
   - Klik "+ Tambah Bahan Ajar"
   - Isi data dummy
   - Simpan
   - Item baru muncul dengan highlight hijau
6. **Kembali ke Dashboard** → Klik "Kembali"
7. **Klik "Tracking Pengiriman"**
8. **Masukkan** `2023001234` → Klik "Cari"
9. **Lihat detail** tracking dengan timeline lengkap
10. **Logout** → Klik "Logout"

## Struktur Data

### Data Pengguna (dataPengguna)
```javascript
{
  id: number,
  nama: string,
  email: string,
  password: string,
  role: string,
  lokasi: string
}
```

### Data Bahan Ajar (dataBahanAjar)
```javascript
{
  kodeLokasi: string,
  kodeBarang: string,
  namaBarang: string,
  jenisBarang: string,
  edisi: string,
  stok: number,
  cover: string
}
```

### Data Tracking (dataTracking)
```javascript
{
  nomorDO: string,
  nama: string,
  status: string,
  ekspedisi: string,
  tanggalKirim: string,
  paket: string,
  total: string,
  perjalanan: [
    {
      waktu: string,
      keterangan: string
    }
  ]
}
```

## Catatan Penting
- Aplikasi ini HANYA front-end, tidak ada koneksi ke server
- Data bersifat sementara (tidak tersimpan permanen)
- Session user disimpan di LocalStorage browser
- Compatible dengan browser modern yang support ES6+

## Support
Jika ada pertanyaan atau masalah, periksa:
1. Console browser (F12) untuk error JavaScript
2. README.md untuk dokumentasi lengkap
3. Source code di folder `js/` untuk logic detail

