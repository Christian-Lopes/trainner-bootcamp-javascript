//Collection Map();
function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const user = new Map();
user.set('Christian', 'Admin');
user.set('Railana', 'Admin');
user.set('Gabriel', 'Client');
user.set('Fernanda', 'User');

console.log(getAdmins(user));

//Collection Set();
const meuArray = [30, 30, 40, 45, 60, 60, 70];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));