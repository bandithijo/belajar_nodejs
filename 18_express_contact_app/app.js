const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
const { loadContact, findContact, checkDuplicate, addContact } = require('./utils/contacts');
const { body, check, validationResult } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// configurasi flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash());

// gunakan ejs
app.set('view engine', 'ejs');
// third-party middleware
app.use(expressLayouts);
// built-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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

app.get('/about', (req, res, next) => {
    res.render('about', {
        layout: 'layouts/base',
        title: 'About - ExpressJS'
    });
});

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', {
        layout: 'layouts/base',
        title: 'Contact - ExpressJS',
        contacts,
        msg: req.flash('msg')
    });
});

// halaman form tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        layout: 'layouts/base',
        title: 'Tambah Contact - ExpressJS'
    })
});

// proses tambah data contact
app.post('/contact',
    [
        body('nama').custom((value) => {
            const duplicate = checkDuplicate(value);
            if (duplicate) {
                throw new Error('Nama contact sudah terdaftar!');
            }
            return true;
        }),
        check('phone', 'Phone tidak valid!').isMobilePhone('id-ID'),
        check('email', 'Email tidak valid!').isEmail(),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // return res.status(400).json({ errors: errors.array() });
            res.render('add-contact', {
                layout: 'layouts/base',
                title: 'Tambah Contact - ExpressJS',
                errors: errors.array()
            })
        } else {
            addContact(req.body);
            req.flash('msg', 'Data contact berhasil ditambahkan!');
            res.redirect('/contact');
        }
    }
);

// halaman detail contact
app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);
    res.render('detail', {
        layout: 'layouts/base',
        title: 'Detail Contact - ExpressJS',
        contact
    });
});

app.use('/', (req, res) => {
    res.status(404)
    res.render('404', {
        layout: 'layouts/base',
        title: '404 - ExpressJS'
    });
});

app.listen(port, () => {
    console.log(`ExpressJS app listening at http://localhost:${port}`);
});
