const http = require('http');
const fs = require('fs');

const port = 3002;

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === '/') {
        console.log("Membaca file index.html...");

        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('File tidak ditemukan!');
                console.error('Error membaca file:', err);
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                console.log("File index.html berhasil dibaca dan dikirim ke client.");
            }
            res.end();
        }); 
    } else if (url === '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('File tidak ditemukan!');
                console.error('Error membaca file:', err);
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                console.log("File about.html berhasil dibaca dan dikirim ke client.");
            }
            res.end();
        }); 
    } else if (url === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<h1>Contact Page</h1>');
        res.write('<p>Ini adalah halaman contact</p>');
        res.end();
    } else if (url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
}).listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
});

