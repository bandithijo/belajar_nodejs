const { buatPertanyaan, simpanContact } = require('./contacts'); // object contacts destructuring

const main = async () => {
    const nama = await buatPertanyaan('Masukkan nama anda : ');
    const email = await buatPertanyaan('Masukkan email anda : ');
    const phone = await buatPertanyaan('Masukkan phone anda : ');

    simpanContact(nama, email, phone);
};

main();
