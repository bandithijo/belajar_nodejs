// Asynchronous

const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = id === 1 ? 'Rizqi' : 'Assyaufi';
        callback({ id, nama });
    }, time);
};

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = 'Helo, JavaScript!';
console.log(halo);

console.log('Selesai.');
