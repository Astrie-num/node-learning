
// the http module

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello User");
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

server.listen(8080);
console.log("Server listening on port 8080...");











