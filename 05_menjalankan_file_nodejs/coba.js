#!/usr/bin/node

console.log('-- coba.js!');

const sayHello = (nama, umur) => `Hello, ${nama} (${umur}). Selamat Belajar NodeJS!`;

console.log(sayHello);

module.exports = sayHello;
