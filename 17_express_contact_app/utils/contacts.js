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
}

module.exports = { loadContact, findContact };
