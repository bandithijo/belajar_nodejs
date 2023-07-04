const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bandithijo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// membuat schema
// const Contact = mongoose.model('Contact', {
//     nama: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//     },
// });

// menambah satu data
// const contact1 = new Contact({
//     nama: 'Dody',
//     phone: '0812233445566',
//     email: 'dody@gmail.com',
// });

// simpan ke collection
// contact1.save().then((contact) => {
//     console.log(contact);
// });
