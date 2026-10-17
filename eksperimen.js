console.log("=== Potongan A ===");
// Tebakan: 12
console.log("  Hai Kawan  ".trim().length);
// Tebakan: "KOPI"
console.log("Kopi Susu".toUpperCase().slice(0, 4));
// Tebakan: 3
console.log("a,b,c".split(",").length);
// Tebakan: "boni"
console.log("banana".replace("a", "o"));
// Tebakan: "bonono"
console.log("banana".replaceAll("a", "o"));
// Tebakan: 42
console.log(parseInt("42px"));
// Tebakan: NaN
console.log(Number("42px"));
// Tebakan: 3
console.log(parseInt("3.99"));
// Tebakan: "string"
console.log(typeof (3.14159).toFixed(2));
// Tebakan: "0.30"
console.log((0.1 + 0.2).toFixed(2));
// Tebakan: "1010"
console.log("10" + 5 * 2);
// Tebakan: false
console.log(!0 && !"");

console.log("=== Potongan B ===");
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
// Tebakan: [20, 30]
console.log(potongan);
// Tebakan: [20, 30]
console.log(hapus);
// Tebakan: [10, 40]
console.log(angka);

function ganda(n) {
  return n * 2;
}
function cetak(n) {
  console.log(n * 2);
}
// Tebakan: 10
console.log(ganda(4) + ganda(1));
// Tebakan: 8 lalu undefined
console.log(cetak(4));

const toko = {
  nama: "Senja",
  stok: 5,
  jual(n) {
    this.stok -= n;
    return this.stok;
  },
};
toko.jual(2);
// Tebakan: 2
console.log(toko.jual(1));
// Tebakan: true
console.log("stok" in toko);
for (let k in toko) {
  // Tebakan: nama, stok, jual
  console.log(k);
}

console.log("=== Potongan C ===");
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 5) {
    break;
  }
  hasil += i;
}
// Tebakan: "134"
console.log(hasil);

let n = 3;
let kali = 1;
while (n > 0) {
  kali *= n;
  n--;
}
// Tebakan: 6
console.log(kali);

let x = 0;
do {
  x += 5;
} while (x < 3);
// Tebakan: 5
console.log(x);

for (let huruf of "ABC") {
  // Tebakan: Aa, Bb, Cc
  console.log(huruf + huruf.toLowerCase());
}

console.log("=== Eksperimen ===");
console.log("1) Function declaration dan function expression");
console.log("Deklarasi fungsi dapat dipanggil sebelum definisi:");
console.log(cekHalo());
function cekHalo() {
  return "Halo";
}

console.log("Function expression tidak bisa dipanggil sebelum definisi:");
const cobaExp = function () {
  return "Coba";
};
console.log(cobaExp());

console.log("2) slice dan splice");
const daftar = [1, 2, 3, 4, 5];
const potong = daftar.slice(1, 3);
const hapus = daftar.splice(1, 2);
console.log("slice:", potong);
console.log("splice:", hapus);
console.log("array asli setelah splice:", daftar);

console.log("3) for...in vs for...of pada array");
const arr = ["A", "B", "C"];
console.log("for...in:");
for (const i in arr) {
  console.log(i);
}
console.log("for...of:");
for (const nilai of arr) {
  console.log(nilai);
}

console.log("4) toFixed menghasilkan teks");
console.log(typeof (5).toFixed(1));
console.log((5).toFixed(1) + 1);

console.log("5) Nilai Falsy");
const nilaiFalsy = [false, 0, "", null, undefined, NaN];
for (const nilai of nilaiFalsy) {
  if (nilai) {
    console.log("Masuk if:", nilai);
  } else {
    console.log("Falsy:", nilai);
  }
}
console.log("Nilai yang masuk if:", ["0", [], {}].filter((nilai) => Boolean(nilai)));

/*
1. Pada Potongan A, "10" + 5 * 2 hasilnya "1010" karena JavaScript menjalankan perkalian dulu lalu penjumlahan string. Jadi 5 * 2 = 10, lalu "10" + 10 menghasilkan "1010" karena salah satu operannya adalah string.
2. Pada Potongan B, potongan dan hapus isinya sama, yaitu [20, 30], tetapi efeknya berbeda karena slice membuat salinan bagian array tanpa mengubah array asli, sedangkan splice mengambil dan menghapus elemen dari array asli.
3. Pada Potongan B, console.log(cetak(4)) mencetak dua baris karena fungsi cetak pertama kali menampilkan n * 2 = 8 dan kemudian mengembalikan undefined. Jadi hasil dari console.log(cetak(4)) adalah 8 dan undefined.
4. Pada Potongan C, hasil bernilai "134" karena i=1 ditambah 1, i=2 dilewati dengan continue, i=3 ditambah 3, i=4 dilewati? Tidak, i=4 ditambah 4, lalu i=5 memicu break. Jadi hasilnya "134". Setelah i=2 continue, maka 2 tidak ditambahkan. Setelah i=5 break, loop berhenti sebelum menambah 5.
5. Pada Potongan C, do...while tetap menjalankan blok satu kali meskipun kondisi awal false karena do...while mengecek kondisi setelah menjalankan blok, bukan sebelum. Jadi x bertambah 5 sebelum kondisi x < 3 diperiksa.
*/

/*
1. Function declaration bisa dipanggil sebelum baris pendefinisiannya, tetapi function expression (`const`) tidak. Ini terjadi karena function declaration di hoisting, tetapi const function expression baru tersedia setelah baris deklarasi dieksekusi.
2. slice tidak mengubah array asli sedangkan splice mengubahnya. Bukti: setelah `slice`, array tetap utuh; setelah `splice`, elemen telah dihapus dari array aslinya.
3. for...in pada array menghasilkan indeks berupa teks, sedangkan for...of menghasilkan nilai item. Contoh: `for (const i in arr)` menampilkan "0", "1", "2", sedangkan `for (const nilai of arr)` menampilkan "A", "B", "C".
4. toFixed menghasilkan teks, sehingga `(5).toFixed(1) + 1` menjadi "5.0" + 1 = "5.01". Itu bukan 6.1 karena operasi string dulu yang terjadi.
5. Enam nilai Falsy adalah false, 0, "", null, undefined, NaN. Mereka tidak lolos ke if. Nilai "0", [], dan {} adalah truthy, jadi masuk ke if.
*/
