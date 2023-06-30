const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
const { loadContact, findContact } = require('./utils/contacts');

// gunakan ejs
app.set('view engine', 'ejs');
// third-party middleware
app.use(expressLayouts);
// built-in middleware
app.use(express.static('public'));

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
        contacts
    });
});

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
