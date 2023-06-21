const fs = require('node:fs');
const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process'); // object destructuring

const rl = readline.createInterface({ input, output });

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

const buatPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
};

const simpanContact = (nama, email, phone) => {
    const contact = { nama, email, phone }; // persiapkan bentuk datanya
    const file = fs.readFileSync('data/contacts.json', 'utf8'); // baca datanya dalam bentuk string
    const contacts = JSON.parse(file); // ubah data string jadi bentuk json

    contacts.push(contact); // json memiliki method push untuk dimasukkan data contact

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); // tulis file dalam bentuk json

    console.log(`Terima kasih, sudah memasukkan data!`);
    rl.close();
};

module.exports = { buatPertanyaan, simpanContact };
