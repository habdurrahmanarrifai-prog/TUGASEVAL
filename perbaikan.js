const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
  nama: "rina",
  saldo: 100000,

  // Bayar belanja. Seharusnya bayar(30000) mengembalikan sisa saldo: 70000
  bayar(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },
};

// Subtotal: jumlahkan harga semua isi keranjang. Seharusnya: 50000
let subtotal = 0;
for (let i = 0; i < keranjang.length; i++) {
  subtotal += harga[keranjang[i]]; // FIX: i harus < keranjang.length agar tidak mengakses indeks yang tidak ada.
}

// Persen diskon: subtotal minimal 50000 → 10, minimal 25000 → 5, selain itu 0.
// Seharusnya diskon: 5000
let persen;
if (subtotal >= 50000) { // FIX: syarat 50000 harus dicek dulu sebelum 25000.
  persen = 10;
} else if (subtotal >= 25000) { // FIX: urutan if/else if dibalik agar 50000 tidak tertangkap 25000.
  persen = 5;
} else {
  persen = 0;
}
let diskon = (subtotal * persen) / 100;

// Promo hari. "jumat" 3000, "sabtu" dan "minggu" 5000, lainnya 0.
// Hari ini "jumat". Seharusnya: 3000
let hari = "jumat";
let promo;
switch (hari) {
  case "jumat":
    promo = 3000; // FIX: case ini harus berhenti di sini dengan break.
    break;
  case "sabtu":
  case "minggu":
    promo = 5000;
    break;
  default:
    promo = 0;
}

// Pajak 11% dari (subtotal - diskon - promo). Seharusnya: 4620
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK; // FIX: operasi harus mengalikan 11% dengan selisih, bukan mengurangi promo setelah dikalikan.

// Total. Seharusnya: 46620
let total = subtotal - diskon - promo + pajak; // FIX: total = subtotal - diskon - promo + pajak.

// Uang bayar dari formulir (teks "100.000"). Seharusnya: 100000, kembalian: 53380
let uangBayarTeks = "100.000";
let uangBayar = Number(uangBayarTeks.replace(/\./g, "")); // FIX: hapus titik agar 100.000 menjadi 100000.
let kembalian = uangBayar - total;

// Status. Uang bayar cukup. Seharusnya: "Lunas"
let status;
if (uangBayar >= total) { // FIX: pakai >=, bukan assignment.
  status = "Lunas";
} else {
  status = "Kurang";
}

// Nama rapi. Seharusnya: "Rina"
let namaRapi = pelanggan.nama.charAt(0).toUpperCase() + pelanggan.nama.slice(1); // FIX: huruf pertama harus diubah ke besar, lalu sisanya dipotong dari indeks 1.

// Keranjang: hapus "teh" pertama, lalu tambah "air" di akhir.
// Seharusnya: [ 'kopi', 'roti', 'teh', 'air' ]
const indeksTeh = keranjang.indexOf("teh"); // FIX: hapus elemen pertama yang cocok dengan "teh".
keranjang.splice(indeksTeh, 1);
keranjang.push("air"); // FIX: menambahkan "air" di akhir array.

// Member bertambah 1. Seharusnya: 6
let jumlahMemberBaru = Number(jumlahMember) + 1; // FIX: jumlahMember bertipe string, jadi harus diubah ke angka sebelum ditambah.

// Rata-rata per item (total dibagi 4) ditambah biaya kemasan 10. Seharusnya: 11665
let rataRata = Number((total / 4).toFixed(2)); // FIX: toFixed menghasilkan string, jadi dikonversi ke Number.
let rataRataTotal = rataRata + 10;

// Format rupiah. Seharusnya formatRupiah(53380) = "Rp 53380"
function formatRupiah(angka) {
  return `Rp ${angka}`; // FIX: fungsi harus mengembalikan string hasil format, tidak hanya string literal tanpa return.
}

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));
for (let kunci in harga) { // FIX: harga adalah object, sehingga harus memakai for...in.
  console.log(kunci + ": " + harga[kunci]);
}

/*
Catatan Bug:
- Kesalahan 1: Tidak error tapi hasil salah. Penyebab: loop `for (let i = 0; i <= keranjang.length; i++)` menjalankan indeks terlalu banyak sehingga `harga[keranjang[i]]` bisa bernilai undefined saat i === keranjang.length.
- Kesalahan 2: Tidak error tapi hasil salah. Penyebab: urutan `if (subtotal >= 25000)` dan `else if (subtotal >= 50000)` salah, sehingga diskon besar tidak pernah dipilih.
- Kesalahan 3: Tidak error tapi hasil salah. Penyebab: `case "jumat":` tidak diakhiri `break`, sehingga program terus masuk ke `case "sabtu"` dan `case "minggu"`.
- Kesalahan 4: Tidak error tapi hasil salah. Penyebab: `let pajak = subtotal - diskon - promo * TARIF_PAJAK;` menempatkan perkalian pada bagian yang salah, bukan pada `subtotal - diskon - promo`.
- Kesalahan 5: Tidak error tapi hasil salah. Penyebab: `let total = subtotal - diskon - promo + pajak;` benar pada rumus total, tetapi saat pajak salah maka total ikut salah.
- Kesalahan 6: Tidak error tapi hasil salah. Penyebab: `parseInt("100.000")` membaca hanya 100 karena pada titik angka berhenti dibaca.
- Kesalahan 7: Tidak error tapi hasil salah. Penyebab: `if ((uangBayar = total))` memakai assignment, bukan perbandingan, sehingga `uangBayar` ikut berubah.
- Kesalahan 8: Tidak error tapi hasil salah. Penyebab: `pelanggan.nama.slice(0)` mengambil seluruh string dari awal, jadi "rina" tidak diubah ke "Rina".
- Kesalahan 9: Tidak error tapi hasil salah. Penyebab: `keranjang.slice(1, 1)` tidak menghapus elemen, dan `keranjang.unshift("air")` menambah elemen di depan bukan di akhir.
- Kesalahan 10: Tidak error tapi hasil salah. Penyebab: `jumlahMember + 1` pada string "5" menghasilkan "51", bukan 6.
- Kesalahan 11: Tidak error tapi hasil salah. Penyebab: `toFixed` menghasilkan string dan kemudian ditambah 10, sehingga hasil bersifat string dan bukan angka.
- Kesalahan 12: Menghentikan program dengan error. Penyebab: `saldo` tidak didefinisikan dalam `pelanggan` method; harus memakai `this.saldo` agar mengacu ke objek.
- Kesalahan 13: Tidak error tapi hasil salah. Penyebab: `for (let kunci of harga)` invalid karena object bukan iterable, sehingga variabel `kunci` tidak dapat berjalan seperti array.
- Kesalahan 14: Tidak error tapi hasil salah. Penyebab: `function formatRupiah(angka) { "Rp " + angka; }` tidak ada `return`, sehingga fungsi selalu mengembalikan undefined.
- Kesalahan 15: Tidak error tapi hasil salah. Penyebab: `keranjang.slice(1, 1)` seharusnya menyisipkan penghapusan nyata atau `splice`, bukan hanya memotong tanpa efek.
*/

/*
1. Kenapa `if (uangBayar = total)` tidak menimbulkan error? Karena dalam JavaScript, assignment juga menghasilkan nilai yang kemudian dipakai oleh if. Jadi `uangBayar` diubah menjadi nilai `total`, lalu kondisi mengevaluasi menjadi `total` yang truthy.
2. Kenapa `parseInt("100.000")` menghasilkan `100`, bukan `100000`? Karena parseInt berhenti membaca angka saat bertemu dengan karakter titik, jadi hanya mengambil bagian "100" dari awal string.
*/
