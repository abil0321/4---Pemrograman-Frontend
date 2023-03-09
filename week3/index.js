// const req = {
//     body: {
//         name: 'Abil',
//         age: 21,
//         major: 'Informatics',
//         // tinggi: 190
//     },
// };

// const {name, age, major, tinggi = 150} = req.body;

// console.log('Nama: ' + name + ', Saya berumur ' + age);

// -------------------------------------------------------------------------------------

// const family = ['Michele', 'Hanna', 'Jonas', 'Mia'];

// const [suami, istri, son, sister = 'Sis-nya lagi dibikin ama son'] = family;

// console.log(suami, istri, son, sister);

// -------------------------------------------------------------------------------------

// const sum = (...numbers) => {
//     let hasil = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         hasil += numbers[i];
//     }

//     console.log(hasil);
// }

// sum(1, 2, 3, 4, 5);

// -------------------------------------------------------------------------------------

// const family = ['Michael', 'Hanna'];

// const newFamily = [...family, 'Jonas', 'Martha'];

// console.log(...newFamily);

// -------------------------------------------------------------------------------------

// const names = ['Abil', 'Efendi', 'Gilang'];

// names.forEach((nama) => {
  
//     console.log(nama);

// });

// -------------------------------------------------------------------------------------

// const namaFormat = names.map((nama) => {
//     return `Mr/Mrs. ${nama} `;
// });

// console.log(names);
// console.log(...namaFormat);

// -------------------------------------------------------------------------------------

// const users = [
//     {
//         name: 'Abil',
//         age: 21
//     },
//     {
//         name: 'Gigih',
//         age: 30
//     },
//     {
//         name: 'Aziz',
//         age: 40
//     }
// ];

// const userDewasa = users.filter((user) => {
//     return user.age > 21;
// });

// const userDewasa = users.filter((user) => user.age > 21);

// console.log(userDewasa);

// -------------------------------------------------------------------------------------

