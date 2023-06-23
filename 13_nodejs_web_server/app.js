const { readFile } = require('fs');
const { createServer } = require('http');
const port = 3000;

const renderHTML = (path, res) => {
    readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: File Not Found!');
        } else {
            res.write(data);
        };
        res.end();
    });
};

createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    const url = req.url;

    switch (url) {
        case '/about':
            renderHTML('./about.html', res);
            break;
        case '/contact':
            renderHTML('./contact.html', res);
            break;
        default:
            renderHTML('./index.html', res);
            break;
    };
}).listen(port, () => {
    console.log(`Server is listenig on localhost:${port}...`);
});
