const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, check, validationResult } = require('express-validator');
const methodOverride = require('method-override');

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

// setup method-override
app.use(methodOverride('_method'));

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
        body('nama').custom(async (value) => {
            const duplicate = await Contact.findOne({ nama: value });
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
            res.render('add-contact', {
                layout: 'layouts/base',
                title: 'Tambah Contact - ExpressJS',
                errors: errors.array()
            })
        } else {
            Contact.insertMany(req.body, (error, result) => {
                req.flash('msg', 'Data contact berhasil ditambahkan!');
                res.redirect('/contact');
            });
        }
    }
);

// proses delete contact
// app.get('/contact/delete/:nama', async (req, res) => {
//     const contact = await Contact.findOne({ nama: req.params.nama });
//
//     if (!contact) {
//         res.status(404);
//         res.send('<h1>404</h1>');
//     } else {
//         Contact.deleteOne({ _id: contact._id }).then((result) => {
//             req.flash('msg', 'Data contact berhasil dihapus!');
//             res.redirect('/contact');
//         });
//     }
// });
app.delete('/contact', (req, res) => {
    Contact.deleteOne({ nama: req.body.nama }).then((result) => {
        req.flash('msg', 'Data contact berhasil dihapus!');
        res.redirect('/contact');
    });
})

// halaman form ubah data contact
app.get('/contact/edit/:nama', async (req, res) => {
    const contact = await Contact.findOne({ nama: req.params.nama });

    res.render('edit-contact', {
        layout: 'layouts/base',
        title: 'Edit Contact - ExpressJS',
        contact
    })
});

// proses ubah data contact
app.put('/contact',
    [
        body('nama').custom(async (value, { req }) => {
            const duplicate = await Contact.findOne({ nama: value });
            if (value !== req.body.oldNama && duplicate) {
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
            res.render('edit-contact', {
                layout: 'layouts/base',
                title: 'Ubah Contact - ExpressJS',
                errors: errors.array(),
                contact: req.body
            })
        } else {
            Contact.updateOne(
                { _id: req.body._id },
                {
                    $set: {
                        nama: req.body.nama,
                        phone: req.body.phone,
                        email: req.body.email,
                    }
                }
            ).then((result) => {
                req.flash('msg', 'Data contact berhasil diubah!');
                res.redirect('/contact');
            });
        }
    }
);

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
