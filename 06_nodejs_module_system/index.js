// const fs = require('fs'); // cara mengimport core modules
// const coba = require('./coba'); // cara mengimport local modules
// const moment = require('moment'); // cara mengimport third party modules / npm modules `node_modules` dir

const coba = require('./coba'); // mengimport local modules

console.log(`-- index.js: ${coba.sayHello('Budi', 34)}`);
console.log(`-- index.js: ${coba.PI}`);
console.log(`-- index.js: ${coba.mahasiswa.cetakMhs()}`);
console.log(`-- index.js: ${new coba.Orang()}`);
