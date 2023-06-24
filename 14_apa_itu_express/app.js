const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello, NodeJS!');
    res.json({
        nama: 'Rizqi Nur Assyaufi',
        email: 'rizqi@gmail.com',
        phone: '621234567890'
    })
});

app.get('/about', (req, res) => {
    // res.send('Ini adalah halaman /about');
    res.sendFile('./pages/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    // res.send('Ini adalah halaman /contact');
    res.sendFile('./pages/contact.html', { root: __dirname });
});

app.get('/product/:id/category/:catid', (req, res) => {
    res.send(`
        Product ID : ${req.params.id}<br>
        Category ID: ${req.params.catid}<br>
        ${req.query.q ? `Search: ${req.query.q}` : ''}
        `)
});

app.use('/', (req, res) => {
    res.status(404)
    res.sendFile('./pages/404.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`ExpressJS app listening at http://localhost:${port}`);
});
