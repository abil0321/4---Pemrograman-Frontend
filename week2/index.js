// const nama = 'Abil';
// const hasil = `nama saya ${nama}`;
// alert(hasil);


// let nilai = 81;

// if (nilai > 90) {
//     alert('A');
// } else if (nilai > 80) {
//     alert('B');
// } else if (nilai > 70) {
//     alert('C');
// } else {
//     alert('D');
// }


// for (let i = 1; i < 10; i++) {
//     console.log(i);
    
// }


// const HitungUmur = (tahunLahir) => {
//     const umur = 2023 - tahunLahir;
//     return umur;
// }

// const tahunLahir = prompt('Tahun Lahir mu!', '');
// const umurGw = HitungUmur(tahunLahir);
// alert(umurGw);

// const animal = ['Kucing', 'Anjing', 'Ikan'];

// for (let i = 0; i < animal.length; i++) {
//     console.log(animal[i]);  
// }

const abil = {
    nama: 'Muhammad Salsabil',
    umur: 22,
    jenisKelamin: 'Pria',
};

console.log(abil);

for (label in abil){
    console.log(label);
    console.log(abil[label]);
}