const users = [
    {
        name: 'Gilang',
        age: 20,
        major: 'Informatics',
    },
    {
        name: 'Abil',
        age: 21,
        major: 'Informatics',
    },
    {
        name: 'Efendi',
        age: 20,
        major: 'Informatics',
    },
    {
        name: 'Gigih',
        age: 21,
        major: 'Informatics',
    },
    {
        name: 'Aziz',
        age: 21,
        major: 'Informatics',
    }
];

// ===== ----------------------------------------------------------------------------- ===== 

const getAll = () => {
    for (let i = 0; i < users.length; i++) {
        console.log(`Nama : ${users[i].name}`);
        console.log(`Age : ${users[i].age}`);
        console.log(`Major : ${users[i].major} \n`);
    }
};
// getAll();

// ===== ----------------------------------------------------------------------------- ===== 

const store = (_name, _age, _major) => {
    users.push(
        {
            name: _name,
            age: _age,
            major: _major
        }
    );
    // getAll();
};

store('budi', 22, 'Informatics');

// ===== ----------------------------------------------------------------------------- ===== 

const update = (index, _name, _age, _major) => {
    users[index] = (
        {
            name: _name,
            age: _age,
            major: _major
        }
    );

    // getAll();
};

update(1, 'Muhammad Salsabil', 22, 'Informatics');

// ===== ----------------------------------------------------------------------------- ===== 

const destroy = (index) => {
    users.splice(index, 1);

    // getAll();
}


destroy(4);



getAll();