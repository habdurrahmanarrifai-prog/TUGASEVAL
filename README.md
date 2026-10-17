# Evaluasi Pekan 6 - Kedai Senja v2

Proyek ini berisi simulasi sistem kasir, pembersihan data transaksi, latihan logika, dan eksperimen JavaScript untuk Kedai Senja. Semua file HTML memanggil file JavaScript masing-masing secara terpisah.

## Cara menjalankan

1. Buka file HTML yang diinginkan di browser:
   - `index.html` untuk aplikasi utama Kedai Senja
   - `logika.html` untuk latihan logika
   - `perbaikan.html` untuk latihan perbaikan kode
   - `eksperimen.html` untuk eksperimen dan tebak-tebakan
2. Untuk menguji di terminal, jalankan:
   - `node script.js`
   - `node logika.js`
   - `node perbaikan.js`
   - `node eksperimen.js`

## Teknologi yang digunakan

- JavaScript
- HTML
- Git
- Node.js (untuk uji konsol)

## Nama penulis

Rizki Nugraha

## Git log

```text
*   13c6631 (HEAD -> main) merge: tebak jelaskan
|\  
| * 011f532 (docs/tebak-jelaskan) docs: menjelaskan hasil eksperimen
| * 77db2a8 docs: menambah tebakan dan eksperimen
|/  
*   52ac554 merge: perbaikan kode
|\  
| * a2801d6 (fix/perbaikan-kode) refactor: menata catatan bug
| * 3b42657 fix: memperbaiki kode transaksi
|/  
*   86c436c merge: latihan logika
|\  
| * 8f4218b (feat/latihan-logika) test: mengecek logika dasar
| * a388e08 feat: menambahkan latihan logika
|/  
*   7501ed0 merge: laporan harian
|\  
| * fa10d1b (feat/laporan-harian) docs: menata ringkasan laporan
| * 95d7ead feat: menghitung laporan harian
|/  
*   a3fc863 merge: mesin kasir
|\  
| * 5bb264e (feat/mesin-kasir) fix: menghitung kembalian dan pajak
| * 855295e feat: membangun mesin kasir
|/  
*   a8e15b9 merge: data dan pembersihan
|\  
| * 33d79ac (feat/data-dan-pembersihan) fix: membersihkan data transaksi
| * a688497 feat: menyiapkan data mentah
|/  
* 3014e2d chore: inisialisasi proyek
```

## Jawaban singkat

### 1) Kenapa pekerjaan dibagi ke banyak branch, bukan semuanya di main?
Karena setiap bagian kerja memiliki fokus yang berbeda dan perlu dibuat secara terpisah agar lebih rapi, mudah dilacak, dan memudahkan pengecekan perubahan sebelum digabung ke main.

### 2) Apa fungsi .gitignore dan apa yang kamu masukkan ke dalamnya?
.gitignore berfungsi agar file tertentu tidak ikut masuk ke repository, seperti hasil instalasi atau file rahasia. Saya memasukkan `node_modules/` dan `.env`.

### 3) Apa beda merge lokal dengan Pull Request di GitHub?
Merge lokal langsung menggabungkan branch di mesin lokal, sedangkan Pull Request adalah permintaan penggabungan yang dibuat di GitHub dengan review dan proses yang lebih terstruktur sebelum digabung.
