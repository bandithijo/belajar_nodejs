// mengambil argument dengan yargs node module
const yargs = require('yargs');
const { simpanContact } = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        phone: {
            describe: 'Phone number',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     phone: argv.phone
        // }
        // console.log(contact);
        simpanContact(argv.nama, argv.email, argv.phone);
    }
});

yargs.parse();

// mengambil argument dari command line
// const command = process.argv[2];
// if (command === 'add') {
//     console.log('=> menambahkan data');
// } else if (command === 'remove') {
//     console.log('=> menghapus data');
// } else if (command === 'list') {
//     console.log('=> daftar contacts');
// } else {
//     console.log('=> command tidak terdaftar!');
// };

// const { buatPertanyaan, simpanContact } = require('./contacts'); // object contacts destructuring
//
// const main = async () => {
//     const nama = await buatPertanyaan('Masukkan nama anda : ');
//     const email = await buatPertanyaan('Masukkan email anda : ');
//     const phone = await buatPertanyaan('Masukkan phone anda : ');
//
//     simpanContact(nama, email, phone);
// };
//
// main();
