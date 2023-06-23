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

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8'); // baca datanya dalam bentuk string
    const contacts = JSON.parse(file); // ubah data string jadi bentuk json
    return contacts;
}

const simpanContact = (nama, email, phone) => {
    const contact = { nama, email, phone }; // persiapkan bentuk datanya
    const contacts = loadContact();

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

const listContact = () => {
    console.log(chalk.green.bold(`Daftar Contacts`));

    const contacts = loadContact();

    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} \t ${contact.phone} \t ${contact.email}`)
    });
};

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if (!contact) {
        console.log(chalk.red.bold(`Nama: ${nama}, tidak ditemukan!`));
        return false;
    }

    console.log(chalk.green.bold(contact.nama));
    console.log(contact.phone);
    if (contact.email) console.log(contact.email);
};

const deleteContact = (nama) => {
    const contacts = loadContact();

    // filter dan buat array baru dari element array yang tidak termasuk dari filter
    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

    if (contacts.length === newContacts.length) {
        console.log(chalk.red.bold(`Nama: ${nama}, tidak ditemukan!`));
        return false;
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts, null, 2)); // tulis file dalam bentuk json

    console.log(chalk.green.bold(`Nama: ${nama}, berhasil dihapus!`));
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
