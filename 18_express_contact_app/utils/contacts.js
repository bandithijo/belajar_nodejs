const fs = require('node:fs');

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

// ambil semua data di data/contacts.json
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8'); // baca datanya dalam bentuk string
    const contacts = JSON.parse(file); // ubah data string jadi bentuk json
    return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
    return contact
};

// menimpa file contacts.json dengan data yang baru
const addContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
};

// menambahkan data contact baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    addContacts(contacts);
};

// memeriksa nama yang duplicate
const checkDuplicate = (nama) => {
    const contacts = loadContact();
    return contacts.find((contact) => contact.nama === nama);
};

module.exports = { loadContact, findContact, checkDuplicate, addContact };
