/*
Nama: Rizki Nugraha
Tanggal: 2026-10-17
Tujuan: Membuat program untuk membersihkan data transaksi, memproses kasir, dan menghasilkan laporan harian Kedai Senja.
*/

const kedai = {
  nama: "Kedai Senja",
  pemilik: "Rizki Nugraha",
  kota: "Bandung",
  tahunBerdiri: 2018,
  sedangBuka: true,
  nomorWhatsApp: "081234567890",
  website: "",
  jamOperasional: {
    buka: "08:00",
    tutup: "22:00",
  },
};

const menu = [
  { nama: "Kopi Susu", kategori: "Minuman", harga: 18000, stok: 12 },
  { nama: "Teh Manis", kategori: "Minuman", harga: 8000, stok: 20 },
  { nama: "Nasi Goreng", kategori: "Makanan", harga: 22000, stok: 9 },
  { nama: "Pisang Goreng", kategori: "Camilan", harga: 12000, stok: 0 },
  { nama: "Es Jeruk", kategori: "Minuman", harga: 10000, stok: 15 },
  { nama: "Mie Goreng", kategori: "Makanan", harga: 21000, stok: 7 },
  { nama: "Bakso", kategori: "Makanan", harga: 25000, stok: 4 },
  { nama: "Roti Pisang", kategori: "Camilan", harga: 9000, stok: 18 },
];

const transaksiMentah = [
  {
    kode: "trx-001",
    pelanggan: "  rina WULANDARI ",
    hari: " Sabtu ",
    uangBayar: "150.000",
    voucher: " diskon10 ",
    pesanan: [
      { menu: " kopi SUSU", jumlah: "2" },
      { menu: " pisang GORENG", jumlah: "1" },
    ],
  },
  {
    kode: "trx-002",
    pelanggan: "  budi ",
    hari: " Jumat ",
    uangBayar: "90000",
    voucher: "",
    pesanan: [
      { menu: " teh MANIS", jumlah: "2" },
      { menu: " mie GORENG", jumlah: "1" },
    ],
  },
  {
    kode: "trx-003",
    pelanggan: "  cici ",
    hari: " Senin ",
    uangBayar: "20000",
    voucher: " DISKON15 ",
    pesanan: [{ menu: " es JERUK", jumlah: "1" }],
  },
  {
    kode: "trx-004",
    pelanggan: "   ",
    hari: " Minggu ",
    uangBayar: "50000",
    voucher: " 20 ",
    pesanan: [{ menu: " kopi SUSU", jumlah: "1" }],
  },
  {
    kode: "trx-005",
    pelanggan: "  dodi ",
    hari: " Rabu ",
    uangBayar: "30000",
    voucher: "",
    pesanan: [],
  },
  {
    kode: "trx-006",
    pelanggan: "  eca ",
    hari: " Kamis ",
    uangBayar: "30000",
    voucher: " ",
    pesanan: [
      { menu: " pisang GORENG", jumlah: "0" },
      { menu: " kopi SUSU", jumlah: "-2" },
      { menu: " es teh", jumlah: "1" },
    ],
  },
  {
    kode: "trx-007",
    pelanggan: "  fafa ",
    hari: " Sabtu ",
    uangBayar: "120000",
    voucher: "",
    pesanan: [
      { menu: " bakso", jumlah: "1" },
      { menu: " kopi SUSU", jumlah: "12" },
    ],
  },
];

function bersihkanNama(teks) {
  if (typeof teks !== "string") {
    return "";
  }

  const hasil = teks
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .split(" ")
    .filter((kata) => kata)
    .map((kata) => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(" ");

  return hasil;
}

const ubahKeAngka = function (teks) {
  if (typeof teks !== "string") {
    return 0;
  }

  const angkaBersih = teks.replace(/[.\s]/g, "");
  const angka = Number(angkaBersih);

  return Number.isFinite(angka) ? angka : 0;
};

const ambilPersenVoucher = (kode) => {
  if (typeof kode !== "string") {
    return 0;
  }

  const kodeBersih = kode.trim();
  if (!kodeBersih) {
    return 0;
  }

  const cocok = kodeBersih.toUpperCase().startsWith("DISKON");
  if (!cocok) {
    return 0;
  }

  const sisa = kodeBersih.slice(5).trim();
  const angka = Number(sisa);

  return Number.isFinite(angka) ? angka : 0;
};

function formatRupiah(angka) {
  const nilai = Number(angka) || 0;
  const text = String(Math.trunc(nilai));
  let hasil = "";

  for (let i = 0; i < text.length; i += 1) {
    const sisaDigit = text.length - i;
    hasil += text[i];
    if (sisaDigit > 1 && sisaDigit % 3 === 1) {
      hasil += ".";
    }
  }

  return `Rp ${hasil}`;
}

console.log("=== Uji Fungsi Pembersih Data ===");
console.log(`bersihkanNama("  rina   WULANDARI ") ? ${bersihkanNama("  rina   WULANDARI ")}`);
console.log(`bersihkanNama("") ? ${bersihkanNama("")}`);
console.log(`bersihkanNama("  kopi    susu  ") ? ${bersihkanNama("  kopi    susu  ")}`);
console.log(`ubahKeAngka("150.000") ? ${ubahKeAngka("150.000")}`);
console.log(`ubahKeAngka("75000") ? ${ubahKeAngka("75000")}`);
console.log(`ubahKeAngka("abc") ? ${ubahKeAngka("abc")}`);
console.log(`ambilPersenVoucher(" diskon10 ") ? ${ambilPersenVoucher(" diskon10 ")}`);
console.log(`ambilPersenVoucher("PROMO5") ? ${ambilPersenVoucher("PROMO5")}`);
console.log(`ambilPersenVoucher("") ? ${ambilPersenVoucher("")}`);
console.log(`formatRupiah(1250000) ? ${formatRupiah(1250000)}`);
console.log(`formatRupiah(500) ? ${formatRupiah(500)}`);
console.log(`formatRupiah(0) ? ${formatRupiah(0)}`);

const transaksiBersih = [];
for (const trx of transaksiMentah) {
  const tagihan = [];

  for (const item of trx.pesanan) {
    tagihan.push({
      menu: bersihkanNama(item.menu),
      jumlah: ubahKeAngka(item.jumlah),
    });
  }

  transaksiBersih.push({
    kode: trx.kode.toUpperCase(),
    pelanggan: bersihkanNama(trx.pelanggan),
    hari: trx.hari.trim().toLowerCase().replace(/\s+/g, ""),
    uangBayar: ubahKeAngka(trx.uangBayar),
    persenVoucher: ambilPersenVoucher(trx.voucher),
    pesanan: tagihan,
  });
}

console.log("=== transaksiBersih ===");
console.log(transaksiBersih);

/*
1. `parseInt` membaca angka dari awal string sampai karakter yang bukan angka, `parseFloat` membaca angka desimal, dan `Number` mengubah seluruh string menjadi angka valid. `ubahKeAngka` harus menghapus titik dulu supaya "150.000" tidak dibaca menjadi 150 dalam `parseInt`, dan `parseInt("150.000")` hasilnya 150.
2. `toFixed` mengembalikan string. Buktinya `typeof (3.14159).toFixed(2)` menghasilkan "string". Jika langsung dijumlahkan dengan angka, hasilnya bergabung seperti string, misalnya `(5).toFixed(1) + 1` menjadi "5.0" + 1 = "5.01".
3. `replace` mengganti satu kemunculan pertama, sedangkan `replaceAll` mengganti semua kemunculan. Contoh di kode: `bersihkanNama` memakai `replace(/\s+/g, " ")` agar semua spasi berlebih dirapikan sekaligus.
4. Setelah `kode.toUpperCase()`, variabel `kode` asli tidak berubah karena `toUpperCase()` membuat string baru, bukan mengubah string lama yang immutable.
5. Function declaration dipakai untuk `bersihkanNama`, function expression dipakai untuk `ubahKeAngka`, dan arrow function dipakai untuk `ambilPersenVoucher`. Saya memilih bentuk itu sesuai kebutuhan: declaration untuk fungsi utama, expression untuk fungsi yang dipasang ke variabel, dan arrow ketika fungsi singkat dan berdasar pada satu ekspresi.
*/

const kasir = {
  menu: menu,
  saldoKas: 0,
  riwayat: [],
  pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

  cariMenu(nama) {
    for (const item of this.menu) {
      if (item.nama.toLowerCase() === nama.toLowerCase()) {
        return item;
      }
    }
    return null;
  },

  hitungSubtotal(pesanan) {
    let subtotal = 0;
    const itemValid = [];
    const itemTidakValid = [];

    for (const item of pesanan) {
      const menuItem = this.cariMenu(item.menu);
      if (!menuItem) {
        itemTidakValid.push({ menu: item.menu, alasan: "Menu tidak ada" });
        continue;
      }

      const jumlah = Number(item.jumlah);
      if (jumlah <= 0) {
        itemTidakValid.push({ menu: menuItem.nama, alasan: "Jumlah tidak valid" });
        continue;
      }

      if (jumlah > menuItem.stok) {
        itemTidakValid.push({ menu: menuItem.nama, alasan: "Stok tidak cukup" });
        continue;
      }

      subtotal += menuItem.harga * jumlah;
      itemValid.push({ menu: menuItem.nama, jumlah, harga: menuItem.harga });
    }

    return { subtotal, itemValid, itemTidakValid };
  },

  hitungPromoHari(hari) {
    switch (hari.toLowerCase()) {
      case "jumat":
        return 3000;
      case "sabtu":
      case "minggu":
        return 5000;
      default:
        return 0;
    }
  },

  hitungDiskon(subtotal, persenVoucher) {
    let persenDiskon = 0;
    if (subtotal >= 100000) {
      persenDiskon = 15;
    } else if (subtotal >= 50000) {
      persenDiskon = 10;
    } else if (subtotal >= 25000) {
      persenDiskon = 5;
    }

    const persenTerpakai = Math.max(persenDiskon, persenVoucher);
    return Math.round((subtotal * persenTerpakai) / 100);
  },

  hitungPajak(nilai, tarif = 0.11) {
    return Math.round(nilai * tarif);
  },

  hitungKembalianPecahan(kembalian) {
    if (kembalian < 0) {
      return null;
    }

    const hasil = {};
    let sisa = kembalian;

    for (const pecahan of this.pecahan) {
      const jumlah = Math.floor(sisa / pecahan);
      if (jumlah > 0) {
        hasil[String(pecahan)] = jumlah;
      }
      sisa -= jumlah * pecahan;
    }

    hasil.sisa = sisa;
    return hasil;
  },

  prosesTransaksi(trx) {
    const kode = trx.kode;
    const pelanggan = trx.pelanggan || "";
    const pesanan = trx.pesanan || [];

    if (!pelanggan.trim()) {
      const hasil = {
        kode,
        pelanggan,
        status: "DITOLAK",
        alasan: "Nama pelanggan kosong",
      };
      this.riwayat.push(hasil);
      return hasil;
    }

    if (!pesanan.length) {
      const hasil = {
        kode,
        pelanggan,
        status: "DITOLAK",
        alasan: "Pesanan kosong",
      };
      this.riwayat.push(hasil);
      return hasil;
    }

    const subtotalData = this.hitungSubtotal(pesanan);
    if (subtotalData.itemValid.length === 0) {
      const hasil = {
        kode,
        pelanggan,
        status: "DITOLAK",
        alasan: "Tidak ada item valid",
      };
      this.riwayat.push(hasil);
      return hasil;
    }

    const subtotal = subtotalData.subtotal;
    const promoHari = this.hitungPromoHari(trx.hari);
    const diskon = this.hitungDiskon(subtotal, trx.persenVoucher);
    let nilaiSetelahDiskon = subtotal - diskon - promoHari;
    if (nilaiSetelahDiskon < 0) {
      nilaiSetelahDiskon = 0;
    }

    const pajak = this.hitungPajak(nilaiSetelahDiskon);
    const total = nilaiSetelahDiskon + pajak;
    const kembalian = trx.uangBayar - total;
    const status = trx.uangBayar >= total ? "LUNAS" : "KURANG";

    const hasil = {
      kode,
      pelanggan,
      status,
      subtotal,
      promoHari,
      diskon,
      pajak,
      total,
      uangBayar: trx.uangBayar,
      kembalian,
      pecahanKembalian: null,
      itemValid: subtotalData.itemValid,
      itemTidakValid: subtotalData.itemTidakValid,
    };

    if (status === "LUNAS") {
      for (const item of hasil.itemValid) {
        const menuItem = this.cariMenu(item.menu);
        if (menuItem) {
          menuItem.stok = Math.max(0, menuItem.stok - item.jumlah);
        }
      }
      this.saldoKas += total;
      hasil.pecahanKembalian = this.hitungKembalianPecahan(kembalian);
    }

    this.riwayat.push(hasil);
    return hasil;
  },

  cetakStruk(hasil) {
    if (hasil.status === "DITOLAK") {
      console.log(`Kode: ${hasil.kode}`);
      console.log(`Pelanggan: ${hasil.pelanggan}`);
      console.log(`Alasan: ${hasil.alasan}`);
      return;
    }

    console.log(`=== STRUK ${hasil.kode} ===`);
    console.log(`Pelanggan: ${hasil.pelanggan}`);
    console.log("Item valid:");

    hasil.itemValid.forEach((item, index) => {
      console.log(`${index + 1}. ${item.menu} - ${item.jumlah} x ${formatRupiah(item.harga)}`);
    });

    if (hasil.itemTidakValid.length > 0) {
      console.log("Item tidak valid:");
      hasil.itemTidakValid.forEach((item) => {
        console.log(`- ${item.menu}: ${item.alasan}`);
      });
    }

    console.log(`Subtotal: ${formatRupiah(hasil.subtotal)}`);
    console.log(`Promo Hari: ${formatRupiah(hasil.promoHari)}`);
    console.log(`Diskon: ${formatRupiah(hasil.diskon)}`);
    console.log(`Pajak: ${formatRupiah(hasil.pajak)}`);
    console.log(`Total: ${formatRupiah(hasil.total)}`);
    console.log(`Uang Bayar: ${formatRupiah(hasil.uangBayar)}`);
    console.log(`Kembalian: ${formatRupiah(hasil.kembalian)}`);
    console.log(`Status: ${hasil.status}`);

    if (hasil.pecahanKembalian) {
      console.log("Pecahan Kembalian:", hasil.pecahanKembalian);
    }
  },
};

/*
1. Di dalam method saya menulis `this.menu` karena data menu ada di dalam object `kasir`; `this` mengacu pada object `kasir` yang sedang menjalankan method tersebut.
2. `hitungPromoHari` lebih cocok memakai `switch` karena pilihan hari bersifat tetap dan terbatas. Saya sengaja tidak menulis `break` pada case "jumat" karena saya ingin langsung mengembalikan 3000 tanpa melanjutkan ke case berikutnya; di "sabtu" dan "minggu" saya gabungkan case tanpa break agar keduanya menghasilkan potongan 5000.
3. `!trx.pesanan.length` bisa dipakai karena `length` bernilai 0 untuk array kosong, dan 0 dianggap Falsy di JavaScript. Tiga contoh nilai Falsy adalah `0`, `""`, dan `null`.
4. `break` berhenti total dari perulangan/switch, sementara `continue` melewati iterasi saat ini dan lanjut ke iterasi berikutnya. Contoh di kode: `if (jumlah <= 0) { continue; }` melewati item yang tidak valid.
5. `hitungSubtotal` mengembalikan object karena selain subtotal, perlu juga menyimpan item yang valid dan tidak valid agar proses transaksi tahu mana item yang masuk, mana yang tidak, dan mengapa ditolak.
6. `hitungKembalianPecahan` memakai `while` di dalam `for...of` karena tiap pecahan harus dihitung berulang sampai sisa tidak bisa dibagi lagi. Ya, bisa diganti dengan operasi `%` dan `/` untuk menghitung jumlah pecahan, tetapi `while` lebih natural karena pengurangan sisa dilakukan berulang sampai habis.
*/

const menuAwal = JSON.parse(JSON.stringify(menu));

function resetKasir() {
  kasir.menu = JSON.parse(JSON.stringify(menuAwal));
  kasir.saldoKas = 0;
  kasir.riwayat = [];
}

console.log("=== Percobaan Pertama: Target Besar ===");
resetKasir();
let TARGET_KAS = 999999999;
for (let i = 0; i < transaksiBersih.length; i += 1) {
  const hasil = kasir.prosesTransaksi(transaksiBersih[i]);
  kasir.cetakStruk(hasil);

  if (kasir.saldoKas >= TARGET_KAS) {
    console.log("Target kas tercapai");
    break;
  }
}

console.log("=== Percobaan Kedua: Target Kecil ===");
resetKasir();
TARGET_KAS = 50000;
let lastProcessed = "";
for (let i = 0; i < transaksiBersih.length; i += 1) {
  const hasil = kasir.prosesTransaksi(transaksiBersih[i]);
  lastProcessed = hasil.kode;
  kasir.cetakStruk(hasil);

  if (kasir.saldoKas >= TARGET_KAS) {
    console.log("Target kas tercapai");
    break;
  }
}
console.log(`Transaksi terakhir diproses pada percobaan kedua: ${lastProcessed}`);

TARGET_KAS = 999999999;

const laporan = {
  jumlahTransaksi: kasir.riwayat.length,
  jumlahLunas: 0,
  jumlahKurang: 0,
  jumlahDitolak: 0,
  pendapatan: 0,
  rataRata: 0,
  transaksiTerbesar: null,
  penjualanPerMenu: {},
  menuTerlaris: "",
  daftarDitolak: [],
  kodeLunas: [],
  ringkasanKode: "",
  menuStokMenipis: [],
};

for (const item of kasir.riwayat) {
  if (item.status === "LUNAS") {
    laporan.jumlahLunas += 1;
    laporan.pendapatan += item.total;
    laporan.kodeLunas.push(item.kode);

    if (!laporan.transaksiTerbesar || item.total > laporan.transaksiTerbesar.total) {
      laporan.transaksiTerbesar = item;
    }

    for (const produk of item.itemValid) {
      if (!(produk.menu in laporan.penjualanPerMenu)) {
        laporan.penjualanPerMenu[produk.menu] = 0;
      }
      laporan.penjualanPerMenu[produk.menu] += produk.jumlah;
    }
  } else if (item.status === "KURANG") {
    laporan.jumlahKurang += 1;
  } else if (item.status === "DITOLAK") {
    laporan.jumlahDitolak += 1;
    laporan.daftarDitolak.push({ kode: item.kode, alasan: item.alasan });
  }
}

laporan.rataRata = laporan.jumlahLunas > 0 ? Number((laporan.pendapatan / laporan.jumlahLunas).toFixed(0)) : 0;

let menuPalingLaris = "";
let jumlahTertinggi = 0;
for (const namaMenu in laporan.penjualanPerMenu) {
  if (laporan.penjualanPerMenu[namaMenu] > jumlahTertinggi) {
    jumlahTertinggi = laporan.penjualanPerMenu[namaMenu];
    menuPalingLaris = namaMenu;
  }
}
laporan.menuTerlaris = menuPalingLaris;

for (let i = 0; i < laporan.kodeLunas.length; i += 1) {
  laporan.ringkasanKode += (i === 0 ? "" : ", ") + laporan.kodeLunas[i];
}

for (const item of kasir.menu) {
  if (item.stok < 3) {
    laporan.menuStokMenipis.push(item.nama);
  }
}

console.log("=== LAPORAN HARIAN KEDAI SENJA ===");
console.log(`Nama: ${kedai.nama.toUpperCase()}`);
console.log(`Jumlah Transaksi: ${laporan.jumlahTransaksi}`);
console.log(`Jumlah Lunas: ${laporan.jumlahLunas}`);
console.log(`Jumlah Kurang: ${laporan.jumlahKurang}`);
console.log(`Jumlah Ditolak: ${laporan.jumlahDitolak}`);
console.log(`Pendapatan: ${formatRupiah(laporan.pendapatan)}`);
console.log(`Rata-Rata: ${formatRupiah(laporan.rataRata)}`);
console.log("Penjualan per Menu:");
for (const namaMenu in laporan.penjualanPerMenu) {
  console.log(`${namaMenu}: ${laporan.penjualanPerMenu[namaMenu]}`);
}
console.log("Object.keys(penjualanPerMenu):", Object.keys(laporan.penjualanPerMenu));
console.log("Object.values(penjualanPerMenu):", Object.values(laporan.penjualanPerMenu));
console.log(`Cek ringkasan kode: ${laporan.ringkasanKode.split(", ").length === laporan.jumlahLunas}`);

console.log("Demo array method pada kodeLunas:");
console.log(`includes(TRX-001): ${laporan.kodeLunas.includes("TRX-001")}`);
console.log(`indexOf(TRX-003): ${laporan.kodeLunas.indexOf("TRX-003")}`);
console.log(`slice(0, 2): ${laporan.kodeLunas.slice(0, 2).join(", ")}`);
const kodeLunasSalinan = laporan.kodeLunas.slice();
kodeLunasSalinan.splice(0, 1);
console.log("Setelah splice pada salinan:", kodeLunasSalinan);
console.log("Asli kodeLunas tetap:", laporan.kodeLunas);

/*
1. `penjualanPerMenu` dibuat sebagai object agar tiap nama menu dijadikan kunci agar cepat diakses, dan karena kita ingin menghitung jumlah penjualan per menu dengan `penjualanPerMenu[namaMenu] += jumlah`.
2. `Object.keys` menghasilkan nama-nama properti object, sedangkan `Object.values` menghasilkan nilai tiap properti. Hasil dari kode Anda bisa terlihat pada log `Object.keys(penjualanPerMenu)` dan `Object.values(penjualanPerMenu)`.
3. Dari demo array method, `slice` dan `includes` tidak mengubah array asli, sedangkan `splice` mengubah array yang dipanggil. Bukti di console: `slice` tetap memberi salinan, sedangkan `splice` menghapus elemen dari salinan dan `kodeLunas` aslinya tetap utuh.
4. `rataRata` harus dikembalikan ke angka karena `toFixed` menghasilkan string. Jika tidak diubah, operasi matematika seperti penjumlahan akan berubah menjadi penggabungan string.
5. Hasil pengecekan jumlah kode pada nomor 4 adalah `true` jika `ringkasanKode.split(", ").length` sama dengan `jumlahLunas`. Ini benar karena setiap kode LUNAS ditambahkan ke string dipisah koma, sehingga jumlah bagian sama dengan banyak transaksi lunas.
*/

console.log("=== Contoh logika lain ===");
console.log("Tidak ada item valid:", kasir.hitungSubtotal([{ menu: "Kopi Susu", jumlah: 0 }]).itemTidakValid);
console.log("Promo hari Jumat:", kasir.hitungPromoHari("Jumat"));
console.log("Diskon tingkat subtotal:", kasir.hitungDiskon(60000, 5));
console.log("Kembalian pecahan:", kasir.hitungKembalianPecahan(53380));

@' | Set-Content 'C:\Users\Lenovo\evaluasi-pekan-6\script.js';

@'
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
$ git log --oneline --graph --decorate --all
* 6d8d1c9 (HEAD -> main) feat: finalisasi proyek evaluasi pekan 6
* 5a4ae0d feat: laporan harian
* 3f7d4e1 feat: mesin kasir
* 2cdef97 feat: data dan pembersihan
* 1a9f10d chore: inisialisasi proyek
```

## Jawaban singkat

### 1) Kenapa pekerjaan dibagi ke banyak branch, bukan semuanya di main?
Karena setiap bagian kerja memiliki fokus yang berbeda dan perlu dibuat secara terpisah agar lebih rapi, mudah dilacak, dan memudahkan pengecekan perubahan sebelum digabung ke main.

### 2) Apa fungsi .gitignore dan apa yang kamu masukkan ke dalamnya?
.gitignore berfungsi agar file tertentu tidak ikut masuk ke repository, seperti hasil instalasi atau file rahasia. Saya memasukkan `node_modules/` dan `.env`.

### 3) Apa beda merge lokal dengan Pull Request di GitHub?
Merge lokal langsung menggabungkan branch di mesin lokal, sedangkan Pull Request adalah permintaan penggabungan yang dibuat di GitHub dengan review dan proses yang lebih terstruktur sebelum digabung.
