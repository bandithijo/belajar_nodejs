// function
function sayHello(nama, umur) {
    return `Hello, ${nama} (${umur}). Selamat Belajar NodeJS!`
};
console.log(`-- coba.js: ${sayHello}`);

// variabel
const PI = 3.14;
console.log(`-- coba.js: ${PI}`);

// object literal
const mahasiswa = {
    nama: 'Rizqi Nur Assyaufi',
    umur: 26,
    cetakMhs() {
        return `Helo, nama saya ${this.nama} dan saya ${this.umur} tahun.`
    }
};
console.log(`-- coba.js: ${mahasiswa.cetakMhs}`);

// class
class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!');
    }
}
console.log(`-- coba.js: ${Orang}`);

// Exports
// module.exports.sayHello = sayHello;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// Exports cara lain
// module.exports = {
//     sayHello: sayHello,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// };

// Exports best practice jika nama property dan value nya sama (ES6 notation)
module.exports = { sayHello, PI, mahasiswa, Orang };
