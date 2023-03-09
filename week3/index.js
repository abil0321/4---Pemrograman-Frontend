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
// console.log(namaFormat);

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

const users = [
    {
      name: "Aufa",
      age: 22,
      major: "Frontend Engineer",
    },
    {
      name: "Isfa",
      age: 20,
      major: "Android Engineer",
    },
    {
      name: "Agung",
      age: 24,
      major: "Data Engineer",
    },
    {
      name: "Nurul",
      age: 24,
      major: "English",
    },
    {
      name: "Jaki",
      age: 27,
      major: "English",
    },
  ];


// async function addTitlesToUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const usersWithTitles = users.map(function(user) {
//         return {
//           ...user,
//           name: "Mr/Mrs. " + user.name,
//         };
//       });
//       resolve(usersWithTitles);
//     }, 5000);
//   });
// }

//  const formatUser = (title) => {
//   return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//           const userName = users.map((user) => {
//               return {
//                   ...user,
//                   name: `${title}  ${user.name}`,
//               };
//           });
//           resolve(userName);
//       }, 3000);
//   });
// }

const formatUser = (title) => {
  return new Promise ((resolve, reject) => {
      setTimeout(() => {
          const userName = users.map((user) => {
              return {
                  ...user,
                  name: `${title}  ${user.name}`,
              };
          });
          resolve(userName);
      }, 3000);
  });
}


const findByName = (name) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const userFind = users.filter((user) => {
              return user.major == name;
          })
          resolve(userFind); 
      }, 2000)
  })
};

async function main() {
  const formatUserN = await formatUser('Mr/Mrs');
  console.log(formatUserN);

  const findUserN = await findByName("English");
  console.log(findUserN);
}

main();