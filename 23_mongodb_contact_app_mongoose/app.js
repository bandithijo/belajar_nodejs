const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// configurasi flash
app.use(cookieParser('secret'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
app.use(flash());

// setup ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// halaman home
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Rizqi Nur Assyaufi',
            nim: '123456'
        },
        {
            nama: 'Muhammad Fajar Setiawan',
            nim: '123457'
        },
        {
            nama: 'Rachmat Saudi Al Fathir AS',
            nim: '123458'
        }
    ]

    res.render('index', {
        layout: 'layouts/base',
        title: 'ExpressJS',
        appName: 'NodeJS',
        mahasiswa
    });
});

// halaman about
app.get('/about', (req, res, next) => {
    res.render('about', {
        layout: 'layouts/base',
        title: 'About - ExpressJS'
    });
});

// halaman contact
app.get('/contact', async (req, res) => {
    // Contact.find().then((contact) => {
    //     res.send(contact);
    // })

    const contacts = await Contact.find();

    res.render('contact', {
        layout: 'layouts/base',
        title: 'Contact - ExpressJS',
        contacts,
        msg: req.flash('msg')
    });
});

// halaman contact detail
app.get('/contact/:nama', async (req, res) => {
    const contact = await Contact.findOne({ nama: req.params.nama });

    res.render('detail', {
        layout: 'layouts/base',
        title: 'Detail Contact - ExpressJS',
        contact
    });
});

app.listen(port, () => {
    console.log(`MongoDB Contact App | listening at http://localhost:${port}...`);
});
