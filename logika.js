function hitungFaktorial(n) {
  if (n < 0) {
    return null;
  }

  let hasil = 1;
  for (let i = 2; i <= n; i += 1) {
    hasil *= i;
  }
  return hasil;
}

function cekPalindrom(teks) {
  if (typeof teks !== "string") {
    return false;
  }

  const kata = teks.trim().toLowerCase();
  if (kata.length === 0) {
    return false;
  }

  let kiri = 0;
  let kanan = kata.length - 1;
  while (kiri < kanan) {
    if (kata[kiri] !== kata[kanan]) {
      return false;
    }
    kiri += 1;
    kanan -= 1;
  }
  return true;
}

function hitungVokal(teks) {
  if (typeof teks !== "string") {
    return 0;
  }

  const vokal = ["a", "i", "u", "e", "o"];
  let total = 0;

  for (const huruf of teks.toLowerCase()) {
    if (vokal.includes(huruf)) {
      total += 1;
    }
  }

  return total;
}

function cariTerbesar(daftar) {
  if (!Array.isArray(daftar) || daftar.length === 0) {
    return null;
  }

  let angkaTerbesar = daftar[0];
  let indeksTerbesar = 0;

  for (let i = 1; i < daftar.length; i += 1) {
    if (daftar[i] > angkaTerbesar) {
      angkaTerbesar = daftar[i];
      indeksTerbesar = i;
    }
  }

  return { nilai: angkaTerbesar, indeks: indeksTerbesar };
}

function hapusDuplikat(daftar) {
  const hasil = [];
  for (const item of daftar) {
    if (!hasil.includes(item)) {
      hasil.push(item);
    }
  }
  return hasil;
}

function cekBilanganPrima(n) {
  if (n <= 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("=== hitungFaktorial ===");
console.log(`5 → ${hitungFaktorial(5)}`);
console.log(`0 → ${hitungFaktorial(0)}`);
console.log(`1 → ${hitungFaktorial(1)}`);
console.log(`-3 → ${hitungFaktorial(-3)}`);

console.log("=== cekPalindrom ===");
console.log(`"Katak" → ${cekPalindrom("Katak")}`);
console.log(`" Malam " → ${cekPalindrom(" Malam ")}`);
console.log(`"Kopi" → ${cekPalindrom("Kopi")}`);
console.log(`"" → ${cekPalindrom("")}`);

console.log("=== hitungVokal ===");
console.log(`"Kedai Senja" → ${hitungVokal("Kedai Senja")}`);
console.log(`"RHYTHM" → ${hitungVokal("RHYTHM")}`);
console.log(`"Aiueo" → ${hitungVokal("Aiueo")}`);

console.log("=== cariTerbesar ===");
console.log(`[12, 45, 7, 45, 30] → ${JSON.stringify(cariTerbesar([12, 45, 7, 45, 30]))}`);
console.log(`[3] → ${JSON.stringify(cariTerbesar([3]))}`);
console.log(`[] → ${JSON.stringify(cariTerbesar([]))}`);

console.log("=== hapusDuplikat ===");
const daftarAsli = [1, 2, 2, 3, 1];
const hasilDuplikat = hapusDuplikat(daftarAsli);
console.log(`[1, 2, 2, 3, 1] → ${JSON.stringify(hasilDuplikat)}`);
console.log("Array asli:", daftarAsli);
console.log(`["a", "b", "a"] → ${JSON.stringify(hapusDuplikat(["a", "b", "a"]))}`);
console.log(`[] → ${JSON.stringify(hapusDuplikat([]))}`);

console.log("=== cekBilanganPrima ===");
console.log(`2 → ${cekBilanganPrima(2)}`);
console.log(`17 → ${cekBilanganPrima(17)}`);
console.log(`15 → ${cekBilanganPrima(15)}`);
console.log(`1 → ${cekBilanganPrima(1)}`);
console.log(`0 → ${cekBilanganPrima(0)}`);

/*
1. Saya memilih function cekPalindrom untuk menjelaskan alurnya. Pertama, teks dibersihkan dengan trim lalu diubah ke huruf kecil. Lalu jika panjangnya 0, fungsi langsung mengembalikan false. Setelah itu, variabel kiri dimulai dari indeks 0 dan kanan dari indeks terakhir. Pada tiap iterasi, jika karakter kiri dan kanan berbeda maka fungsi mengembalikan false; jika sama, keduanya bergerak ke tengah. Jika seluruh karakter cocok, fungsi mengembalikan true.
2. Pada hapusDuplikat, array asli tidak berubah karena saya membuat array baru dengan const hasil = []; lalu memasukkan item ke hasil hanya jika belum ada di hasil. Saya memakai includes untuk memeriksa apakah elemen sudah pernah muncul, karena method itu sangat sederhana dan mengikuti urutan kemunculan pertama.
3. Pada cekBilanganPrima, saya memakai for dan if (n % i === 0) untuk mengecek pembagi. Jika baris break dihapus, program tetap bekerja, tetapi akan terus mengecek semua bilangan sampai akhir, sehingga lebih lambat. break hanya kalau pembagi ditemukan, menghemat proses.
4. cariTerbesar([]) mengembalikan null karena array kosong tidak punya elemen terbesar, dan memilih 0 akan menutup kemungkinan apakah data benar-benar tak ada atau angka 0 memang valid. Null lebih cocok untuk keadaan tidak ada hasil.
5. Saya memakai while pada cekPalindrom dan for pada hitungFaktorial serta for...of pada hitungVokal. while tepat untuk membandingkan dua indeks dari kiri dan kanan, for cocok untuk menghitung faktorial secara berulang, dan for...of cocok untuk menjelajahi tiap karakter teks.
*/
