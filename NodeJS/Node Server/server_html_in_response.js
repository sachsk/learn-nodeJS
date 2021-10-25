const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    res.setHeader('Content-type', 'Text/html');
    res.write('<HTML><head><title>This is the response from node server</title></head>');
    res.write('<body>This is the response from Node server</body></html>');
    res.end();


});
server.listen(3000);
