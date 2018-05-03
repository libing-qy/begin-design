var http = require('http');

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8888);
console.log(process.env.PORT);
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port);