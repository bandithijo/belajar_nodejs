const fs = require('node:fs');
const chalk = require('chalk');
const validator = require('validator');

// membuat direktori data/ jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
};

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf8');
};

const simpanContact = (nama, email, phone) => {
    const contact = { nama, email, phone }; // persiapkan bentuk datanya
    const file = fs.readFileSync('data/contacts.json', 'utf8'); // baca datanya dalam bentuk string
    const contacts = JSON.parse(file); // ubah data string jadi bentuk json

    // validasi duplikat data
    const duplicate = contacts.find((contact) => contact.nama === nama);
    if (duplicate) {
        console.log(`Kontak nama: ${chalk.red.inverse.bold(nama)} sudah terdaftar, gunakan nama lain!`);
        return false; // agar console berhenti dan keluar
    };

    // validasi email format
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(`Format email: ${chalk.red.inverse.bold(email)} tidak valid!`)
            return false; // agar console berhenti dan keluar
        };
    };

    // validaasi phone
    if (!validator.isMobilePhone(phone, 'id-ID')) {
        console.log(`Format phone: ${chalk.red.inverse.bold(phone)} tidak valid!`)
        return false; // agar console berhenti dan keluar
    };

    contacts.push(contact); // json memiliki method push untuk dimasukkan data contact

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); // tulis file dalam bentuk json

    console.log(chalk.green.bold(`Terima kasih, sudah memasukkan data!`));
};

module.exports = { simpanContact };
