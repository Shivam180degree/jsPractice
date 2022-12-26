const http = require('http');

/// The simple way to define the server ///
http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> This is the basic server!!!');
}).listen(4500);

