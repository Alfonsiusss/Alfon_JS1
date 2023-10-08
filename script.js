// Contoh penggunaan if, else, dan nested if
let nilai = 75;
if (nilai >= 80) {
  console.log("Anda lulus dengan nilai A");
} else if (nilai >= 70) {
  console.log("Anda lulus dengan nilai B");
} else {
  console.log("Anda lulus dengan nilai C");
}

// Contoh penggunaan switch case
let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Hari ini adalah hari biasa.");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh penggunaan while loop
let angka = 1;
while (angka <= 5) {
  console.log("Angka ke-" + angka);
  angka++;
}

// Contoh penggunaan do while loop
let counter = 0;
do {
  console.log("Counter: " + counter);
  counter++;
} while (counter < 3);

// Mendefinisikan fungsi
function sapaan(nama) {
  console.log("Halo, " + nama + "! Selamat datang.");
}

// Memanggil fungsi dengan argumen
sapaan("John");
sapaan("Jane");

let hasil = tambah(3, 5);
console.log("Hasil penjumlahan: " + hasil);
