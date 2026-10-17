/*
Nama: Rizki Nugraha
Tanggal: 2026-10-17
Tujuan: Membuat program untuk membersihkan data transaksi, memproses kasir, dan menghasilkan laporan harian Kedai Senja.
*/

function bersihkanNama(teks) {
  if (typeof teks !== "string") {
    return "";
  }

  const kata = teks.trim().split(/\s+/);
  const hasil = kata
    .filter((kataItem) => kataItem.length > 0)
    .map((kataItem) => kataItem.charAt(0).toUpperCase() + kataItem.slice(1).toLowerCase());

  return hasil.join(" ");
}

function ubahKeAngka(teks) {
  if (typeof teks !== "string") {
    return 0;
  }

  const angkaBersih = teks.replace(/[.\s]/g, "");
  const angka = Number(angkaBersih);
  return Number.isFinite(angka) ? angka : 0;
}

function ambilPersenVoucher(kode) {
  if (typeof kode !== "string") {
    return 0;
  }

  const kodeBersih = kode.trim();
  if (!kodeBersih) {
    return 0;
  }

  const kata = kodeBersih.toUpperCase();
  if (!kata.startsWith("DISKON")) {
    return 0;
  }

  const sisa = kodeBersih.slice(5).trim();
  const angka = Number(sisa);
  return Number.isFinite(angka) ? angka : 0;
}

function formatRupiah(angka) {
  const nilai = Number(angka) || 0;
  const angkaString = String(Math.trunc(nilai));
  let hasil = "";

  for (let i = 0; i < angkaString.length; i += 1) {
    const posisi = angkaString.length - i;
    hasil = angkaString[i] + hasil;
    if (posisi > 1 && posisi % 3 === 1) {
      hasil = "." + hasil;
    }
  }

  return `Rp ${hasil}`;
}

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
    pesanan: [
      { menu: " es JERUK", jumlah: "1" },
    ],
  },
  {
    kode: "trx-004",
    pelanggan: "   ",
    hari: " Minggu ",
    uangBayar: "50000",
    voucher: " 20 ",
    pesanan: [
      { menu: " kopi SUSU", jumlah: "1" },
    ],
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

const testCase = (label, input, fn) => {
  const hasil = fn(input);
  console.log(`${label}: ${input} → ${hasil}`);
};

const testCaseExpected = function (label, input, fn, expected) {
  const hasil = fn(input);
  console.log(`${label}: ${input} → ${hasil} | expected: ${expected}`);
};

console.log("=== Uji Fungsi Pembersih Data ===");

testCase("bersihkanNama", "  rina   WULANDARI ", bersihkanNama);
testCase("bersihkanNama", "", bersihkanNama);
testCase("bersihkanNama", "  kopi    susu  ", bersihkanNama);
testCase("ubahKeAngka", "150.000", ubahKeAngka);
testCase("ubahKeAngka", "75000", ubahKeAngka);
testCase("ubahKeAngka", "abc", ubahKeAngka);
testCase("ubahKeAngka", " 2.500 ", ubahKeAngka);
testCase("ambilPersenVoucher", " diskon10 ", ambilPersenVoucher);
testCase("ambilPersenVoucher", "PROMO5", ambilPersenVoucher);
testCase("ambilPersenVoucher", "", ambilPersenVoucher);
testCase("ambilPersenVoucher", " DISKON25 ", ambilPersenVoucher);
testCaseExpected("formatRupiah", 1250000, formatRupiah, "Rp 1.250.000");
testCaseExpected("formatRupiah", 500, formatRupiah, "Rp 500");
testCaseExpected("formatRupiah", 0, formatRupiah, "Rp 0");

const transaksiBersih = [];
for (const trx of transaksiMentah) {
  const itemBersih = trx.pesanan.map((item) => ({
    menu: bersihkanNama(item.menu),
    jumlah: ubahKeAngka(item.jumlah),
  }));

  transaksiBersih.push({
    kode: trx.kode.toUpperCase(),
    pelanggan: bersihkanNama(trx.pelanggan),
    hari: trx.hari.trim().toLowerCase(),
    uangBayar: ubahKeAngka(trx.uangBayar),
    persenVoucher: ambilPersenVoucher(trx.voucher),
    pesanan: itemBersih,
  });
}

console.log("=== transaksiBersih ===");
console.log(transaksiBersih);

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

      const hargaItem = menuItem.harga;
      subtotal += hargaItem * jumlah;
      itemValid.push({ menu: menuItem.nama, jumlah, harga: hargaItem });
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
    const nama = trx.pelanggan || "";
    const pesanan = trx.pesanan || [];

    if (!nama.trim()) {
      const hasil = { kode, pelanggan: nama, status: "DITOLAK", alasan: "Nama pelanggan kosong" };
      this.riwayat.push(hasil);
      return hasil;
    }

    if (!pesanan.length) {
      const hasil = { kode, pelanggan: nama, status: "DITOLAK", alasan: "Pesanan kosong" };
      this.riwayat.push(hasil);
      return hasil;
    }

    const subtotalData = this.hitungSubtotal(pesanan);
    if (subtotalData.itemValid.length === 0) {
      const hasil = { kode, pelanggan: nama, status: "DITOLAK", alasan: "Tidak ada item valid" };
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
      pelanggan: nama,
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
          menuItem.stok -= item.jumlah;
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

function prosesTargetKas(targetKas, gunakanSemua) {
  const kasirTarget = {
    menu: menu.map((item) => ({ ...item })),
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
      return Math.round((subtotal * Math.max(persenDiskon, persenVoucher)) / 100);
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
      const nama = trx.pelanggan || "";
      const pesanan = trx.pesanan || [];

      if (!nama.trim()) {
        const hasil = { kode: trx.kode, pelanggan: nama, status: "DITOLAK", alasan: "Nama pelanggan kosong" };
        this.riwayat.push(hasil);
        return hasil;
      }

      if (!pesanan.length) {
        const hasil = { kode: trx.kode, pelanggan: nama, status: "DITOLAK", alasan: "Pesanan kosong" };
        this.riwayat.push(hasil);
        return hasil;
      }

      const subtotalData = this.hitungSubtotal(pesanan);
      if (subtotalData.itemValid.length === 0) {
        const hasil = { kode: trx.kode, pelanggan: nama, status: "DITOLAK", alasan: "Tidak ada item valid" };
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
        kode: trx.kode,
        pelanggan: nama,
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
            menuItem.stok -= item.jumlah;
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

  for (const trx of transaksiBersih) {
    const hasil = kasirTarget.prosesTransaksi(trx);
    kasirTarget.cetakStruk(hasil);

    if (kasirTarget.saldoKas >= targetKas) {
      console.log("Target kas tercapai");
      if (!gunakanSemua) {
        break;
      }
    }
  }

  return kasirTarget;
}

const TARGET_KAS = 1000000;
console.log("=== Percobaan 1: target besar ===");
const kasirAktif = prosesTargetKas(TARGET_KAS, true);
console.log("Saldo akhir percobaan 1:", kasirAktif.saldoKas);

console.log("=== Percobaan 2: target kecil ===");
const kasirKedua = prosesTargetKas(25000, false);
console.log("Saldo akhir percobaan 2:", kasirKedua.saldoKas);
// Pada percobaan kedua, transaksi terakhir yang diproses adalah trx-003 karena target 25000 tercapai pada transaksi ke-3.

const laporan = {
  jumlahTransaksi: kasirAktif.riwayat.length,
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

for (const item of kasirAktif.riwayat) {
  if (item.status === "LUNAS") {
    laporan.jumlahLunas += 1;
    laporan.pendapatan += item.total;
    laporan.kodeLunas.push(item.kode);

    if (!laporan.transaksiTerbesar || item.total > laporan.transaksiTerbesar.total) {
      laporan.transaksiTerbesar = item;
    }

    for (const validItem of item.itemValid) {
      if (!(validItem.menu in laporan.penjualanPerMenu)) {
        laporan.penjualanPerMenu[validItem.menu] = 0;
      }
      laporan.penjualanPerMenu[validItem.menu] += validItem.jumlah;
    }
  } else if (item.status === "KURANG") {
    laporan.jumlahKurang += 1;
  } else {
    laporan.jumlahDitolak += 1;
    laporan.daftarDitolak.push({ kode: item.kode, alasan: item.alasan });
  }
}

if (laporan.jumlahLunas > 0) {
  laporan.rataRata = Math.round(laporan.pendapatan / laporan.jumlahLunas);
}

let menuTerlarisNama = "";
let jumlahMenuTerlaris = 0;
for (const namaMenu in laporan.penjualanPerMenu) {
  if (laporan.penjualanPerMenu[namaMenu] > jumlahMenuTerlaris) {
    jumlahMenuTerlaris = laporan.penjualanPerMenu[namaMenu];
    menuTerlarisNama = namaMenu;
  }
}
laporan.menuTerlaris = menuTerlarisNama;

for (let i = 0; i < laporan.kodeLunas.length; i += 1) {
  laporan.ringkasanKode += laporan.kodeLunas[i];
  if (i < laporan.kodeLunas.length - 1) {
    laporan.ringkasanKode += ", ";
  }
}

for (const item of menu) {
  if (item.stok < 3) {
    laporan.menuStokMenipis.push(item.nama);
  }
}

console.log("=== LAPORAN HARIAN KEDAI SENJA ===");
console.log(`Nama Kedai: ${kedai.nama.toUpperCase()}`);
console.log(`Jumlah transaksi: ${laporan.jumlahTransaksi}`);
console.log(`Jumlah Lunas: ${laporan.jumlahLunas}`);
console.log(`Jumlah Kurang: ${laporan.jumlahKurang}`);
console.log(`Jumlah Ditolak: ${laporan.jumlahDitolak}`);
console.log(`Pendapatan: ${formatRupiah(laporan.pendapatan)}`);
console.log(`Rata-rata: ${formatRupiah(laporan.rataRata)}`);
console.log("Penjualan per menu:");
for (const namaMenu in laporan.penjualanPerMenu) {
  console.log(`${namaMenu}: ${laporan.penjualanPerMenu[namaMenu]}`);
}
console.log("Object.keys(penjualanPerMenu):", Object.keys(laporan.penjualanPerMenu));
console.log("Object.values(penjualanPerMenu):", Object.values(laporan.penjualanPerMenu));
console.log("Cek ringkasan kode:", laporan.ringkasanKode.split(", ").length === laporan.jumlahLunas);

const kodeLunasDemo = [...laporan.kodeLunas];
console.log("includes TRX-001:", kodeLunasDemo.includes("TRX-001"));
console.log("indexOf TRX-001:", kodeLunasDemo.indexOf("TRX-001"));
console.log("slice 2 kode pertama:", kodeLunasDemo.slice(0, 2));
const kodeLunasSalinan = kodeLunasDemo.slice();
const kodeTerhapus = kodeLunasSalinan.splice(0, 1);
console.log("kodeLunas asli:", laporan.kodeLunas);
console.log("kodeLunas salinan setelah splice:", kodeLunasSalinan);
console.log("kode yang dihapus:", kodeTerhapus);

/*
1. Di dalam method, kita menulis this.menu karena method berada di dalam object kasir. this merujuk pada object kasir itu sendiri, sehingga akses ke menu, saldoKas, dan riwayat dilakukan terhadap properti object yang sama.
2. hitungPromoHari lebih cocok memakai switch karena hari hanya punya beberapa kemungkinan kunci dan masing-masing memiliki potongan yang jelas. Saya sengaja tidak menulis break pada case "sabtu" dan "minggu" karena case-case tersebut memiliki hasil yang sama, sehingga aliran akan langsung jatuh ke return 5000 tanpa perlu menulis ulang.
3. !trx.pesanan.length bisa dipakai untuk mengecek pesanan kosong karena array kosong memiliki panjang 0, dan 0 adalah Falsy. Di JavaScript, tiga contoh nilai yang Falsy yaitu 0, "", dan null.
4. break digunakan di prosesTargetKas untuk menghentikan perulangan saat target tercapai. continue digunakan di hitungSubtotal untuk melewati item yang tidak valid agar tidak ikut dihitung. Bedanya, break menghentikan seluruh loop, sedangkan continue hanya melewati iterasi saat ini.
5. hitungSubtotal mengembalikan object karena selain subtotal, program juga perlu data item yang valid dan tidak valid agar bisa diproses lebih lanjut dalam transaksi dan struk. Angka subtotal saja tidak cukup untuk menampilkan alasan item yang gagal.
6. hitungKembalianPecahan memakai while di dalam for...of agar bisa menghitung jumlah lembar pecahan secara berulang sesuai sisa uang. Prinsipnya bisa dipikirkan dengan % dan /, dan memang struktur ini secara logika sama, tetapi while memudahkan saat proses iterasi dan menghitung sisa kembalian satu per satu.
*/

/*
1. Apa beda parseInt, parseFloat, dan Number? parseInt akan mengambil angka dari depan string dan membuang sisa, parseFloat juga bisa menangani desimal, sedangkan Number mencoba mengubah seluruh string menjadi angka. ubahKeAngka harus menghapus titik terlebih dahulu supaya "150.000" tidak dibaca sebagai "150.000" lalu error atau mengambil nilai yang tidak sesuai; parseInt("150.000") hasilnya 150 karena angka di depan string terbaca sampai titik.
2. toFixed mengembalikan teks, bukan angka. Bukti: typeof (3.14159).toFixed(2) menghasilkan "string". Jika hasil toFixed dijumlahkan dengan angka, misalnya (0.1 + 0.2).toFixed(2) + 1, maka operasi tersebut menjadi string dan hasilnya "0.30 1" bukan angka.
3. replace hanya mengganti satu kemunculan pertama, sedangkan replaceAll mengganti semua kemunculan. Contohnya, saya memakai replaceAll untuk membersihkan semua spasi atau karakter tertentu di data mentah, seperti saat menghilangkan titik ribuan dan spasi dalam ubahKeAngka.
4. Setelah memanggil kode.toUpperCase(), isi variabel kode asli tidak berubah karena toUpperCase() membuat salinan baru, bukan mengubah array/string asli. String di JavaScript bersifat immutable.
5. Saya memakai function declaration untuk bersihkanNama karena struktur ini cocok untuk fungsi yang dipanggil berulang di banyak bagian. Saya memakai function expression untuk testCaseExpected agar fungsi dibuat sebagai variabel dan mudah dipindah. Saya memakai arrow function untuk testCase karena tampilannya singkat dan cocok untuk callback sederhana.
*/

/*
Jawaban untuk Bagian 4:
1. penjualanPerMenu dibuat sebagai object agar setiap menu punya total penjualan yang unik dalam satu key, dan bracket notation dipakai agar nama menu bisa dipakai sebagai key dinamis seperti "Kopi Susu" atau "Teh Manis".
2. Object.keys mengembalikan nama-nama properti, sedangkan Object.values mengembalikan nilai dari tiap properti. Dalam kode, Object.keys(laporan.penjualanPerMenu) menampilkan ["Kopi Susu", ...], sedangkan Object.values(...) menampilkan jumlah penjualan tiap menu.
3. Dari demo array method, yang mengubah array asli adalah splice, sedangkan slice dan includes tidak mengubah array asli. Buktinya, kodeLunas asli tetap sama setelah splice pada salinan array, sedangkan array salinan berubah.
4. rataRata harus diubah kembali menjadi angka setelah memakai toFixed karena toFixed menghasilkan string. Jika tidak diubah, operasi matematika berikutnya bisa salah karena string akan digabungkan, bukan dijumlahkan.
5. Hasil pengecekan jumlah kode pada nomor 4 adalah true jika jumlah kodeLunas sama dengan jumlah transaksi lunas. Ini terjadi karena ringkasanKode dibuat dari semua kode LUNAS dan jumlah elemen array hasil split pada koma sama dengan banyaknya kode LUNAS.
*/

/*
Catatan Bug:
- Kesalahan 1: Tidak error tapi hasil salah. Penyebab: for (let i = 0; i <= keranjang.length; i++) menjalankan iterasi tambahan pada indeks yang tidak ada, lalu harga[keranjang[i]] menjadi undefined dan menambahkan NaN ke subtotal.
- Kesalahan 2: Tidak error tapi hasil salah. Penyebab: if (subtotal >= 25000) dan else if (subtotal >= 50000) terbalik urutan, sehingga diskon 5% dipakai sebelum 10%.
- Kesalahan 3: Tidak error tapi hasil salah. Penyebab: switch case "jumat" tidak diakhiri break, sehingga case berikutnya ikut berjalan dan promo berubah menjadi 5000.
- Kesalahan 4: Tidak error tapi hasil salah. Penyebab: pajak dihitung dengan subtotal - diskon - promo * TARIF_PAJAK, yang artinya operasi perkalian dilakukan setelah pengurangan, sehingga hasilnya tidak sesuai 11% dari nilai diskon.
- Kesalahan 5: Tidak error tapi hasil salah. Penyebab: total tidak menambahkan pajak dengan benar; untuk total yang benar harus menjumlahkan nilai setelah diskon dan promo lalu pajak.
- Kesalahan 6: Tidak error tapi hasil salah. Penyebab: parseInt pada "100.000" hanya membaca 100, bukan 100000, karena titik tidak dibuang.
- Kesalahan 7: Komentar hasil salah. Penyebab: if ((uangBayar = total)) adalah assignment, bukan perbandingan, sehingga uangBayar diubah menjadi total dan status selalu benar walau kondisi bukan pengecekan.
- Kesalahan 8: Tidak error tapi hasil salah. Penyebab: namaRapi menggunakan slice(0) dari 0 sampai akhir, sehingga menghasilkan seluruh string tanpa memotong huruf pertama, yaitu "rina" bukan "Rina".
- Kesalahan 9: Tidak error tapi hasil salah. Penyebab: keranjang.slice(1, 1) tidak menghapus atau memindahkan apa pun, dan keranjang.unshift("air") menambah air di depan, bukan di akhir.
- Kesalahan 10: Tidak error tapi hasil salah. Penyebab: jumlahMemberBaru = jumlahMember + 1 menghasilkan string "51" karena jumlahMember berupa teks "5".
- Kesalahan 11: Tidak error tapi hasil salah. Penyebab: rataRata = (total / 4).toFixed(2) menghasilkan teks, lalu rataRataTotal = rataRata + 10 menghasilkan penggabungan string bukan angka.
- Kesalahan 12: Tidak error tapi hasil salah. Penyebab: function formatRupiah hanya mengembalikan ekspresi tanpa return, sehingga fungsi mengembalikan undefined.
- Kesalahan 13: Tidak error tapi hasil salah. Penyebab: untuk ... of harga iterasi object gagal karena harga bukan iterable, sehingga loop tidak bekerja seperti yang diharapkan.
- Kesalahan 14: Tidak error tapi hasil salah. Penyebab: bayar(jumlah) mengubah saldo langsung tanpa menggunakan this, sehingga saldo tidak mengarah ke properti objek pelanggan.
- Kesalahan 15: Menghentikan program dengan error. Penyebab: `saldo -= jumlah;` pada method bayar tanpa this dan `saldo` belum didefinisikan dalam scope method, sehingga menyebabkan ReferenceError.
*/

/*
1. if (uangBayar = total) tidak menimbulkan error karena JavaScript mengizinkan assignment expression di dalam kondisi. Nilai yang diberikan dari assignment itu adalah total, dan setelah baris tersebut uangBayar berubah menjadi nilai total.
2. parseInt("100.000") menghasilkan 100 bukan 100000 karena parseInt membaca bagian angka dari depan string sampai menemukan karakter non-angka, yaitu titik, dan berhenti di 100.
*/
