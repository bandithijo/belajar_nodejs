// Synchronous

const getUserSync = (id) => {
    // let nama = '';
    // if (id === 1) {
    //     nama = 'Rizqi';
    // } else {
    //     nama = 'Assyaufi';
    // }
    // return { id: id, nama: nama };
    const nama = id === 1 ? 'Rizqi' : 'Assyaufi';
    return { id, nama };
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello, JavaScript!';
console.log(halo);

console.log('Selesai.');
