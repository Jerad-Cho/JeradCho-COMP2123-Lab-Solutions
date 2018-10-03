var sysinfo = require('./osinfo');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');

    var urlParse =  url.parse(req.url, true);

    if (urlParse.pathname === '/systeminfo'){
        var queryData = urlParse.sysinfo();
        console.log('Display system info: ' + queryData);
    }
    else if (urlParse.pathname === '/firewall'){
        var queryData = urlParse.firewall();
        
        console.log('Display firewall info: ' + queryData);
    }
    else if (urlParse.pathname === '/index'){
        var queryData = urlParse.index();
        console.log('Display firewall info: ' + queryData);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});