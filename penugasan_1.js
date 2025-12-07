// Di kota Zootopia, Judy Hopps dan Nick Wilde sedang latihan untuk meningkatkan stamina sebagai penjaga kota.
// Program menggunakan konsep berikut:
// Menyimpan nama karakter dan jarak lari per hari (variabel + tipe data)
// Menghitung total jarak selama 5 hari (operator)
// Menampilkan laporan latihan setiap hari (looping) 
// Setelah selesai, upload hasilnya ke GitHub, lalu kumpulkan link repository-nya.

console.log("=== LAPORAN LATIHAN PENJAGA ZOOTOPIA ===")
console.log("");

let karakter = [{ nama: "Judy Hopps", jarakPerHari: 10 }, { nama: "Nick Wilde", jarakPerHari: 8 }];

let totalHari = 5;

console.log("JARAK LARI PERHARI:");
console.log("-", karakter[0].nama, ":" , karakter[0].jarakPerHari + " km");
console.log("-", karakter[1].nama, ":" , karakter[1].jarakPerHari + " km");
console.log("");

for (let i = 0; i < totalHari; i++) {
    console.log("HARI KE -",i + 1);
    for (let j = 0; j < karakter.length; j++) {
        let namaKarakter = karakter[j].nama;
        let jarakPerHari = karakter[j].jarakPerHari;
        let totalJarak = jarakPerHari * (i + 1);

        console.log(namaKarakter, "lari", jarakPerHari + " km");
        console.log(" - Total jarak :", totalJarak + " km");
    }
    console.log();
}