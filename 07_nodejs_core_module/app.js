// Core Module
// File System https://nodejs.org/dist/latest-v20.x/docs/api/fs.html

const fs = require('node:fs');

// menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello, NodeJS secara synchronous!');
// } catch (error) {
//     console.log(error);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello, NodeJS secara asynchronous!', (err) => {
//     if (err) throw err;
//     console.log(err);
// })

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf8');
// console.log(data.toString()); // tanpa encoding utf8
// console.log(data.toString());

// membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// Readline https://nodejs.org/dist/latest-v20.x/docs/api/readline.html
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// rl.question('Masukkan nama anda : ', (nama) => {
//     console.log(`Terima kasih, ${nama}!`);
//     rl.close();
// });

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan nomor hape anda : ', (phone) => {
        const contact = { nama, phone }; // persiapkan bentuk datanya
        const file = fs.readFileSync('data/contacts.json', 'utf8'); // baca datanya dalam bentuk string
        const contacts = JSON.parse(file); // ubah data string jadi bentuk json

        contacts.push(contact); // json memiliki method push untuk dimasukkan data contact

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); // tulis file dalam bentuk json

        console.log(`Terima kasih, sudah memasukkan data!`);
        rl.close();
    });
});
