var net = require('net');
var redisClient = require('redis').createClient();

require('dotenv').config();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const REDIS_IOTBEESCALE_LIST = process.env.REDIS_IOTBEESCALE_LIST;

var http = require('http');
var server = http.createServer(function(req, res){
    console.log(`Connection from: ${req.method} ${res.socket.remoteAddress}:${res.socket.remotePort}\n${JSON.stringify(req.headers, null, 2)}`);
    req.on('data', function(data) {
      console.log(`Got data from ${res.socket.remoteAddress}:${res.socket.remotePort}:\n` + data);

      redisClient.rpush([REDIS_IOTBEESCALE_LIST, data]);

      res.writeHead(200, ['Content-Type', 'text/plain']);
      res.end('');
    });
});
server.listen(PORT, HOST, function() {
  console.log(`Server listening on http://${HOST}:${PORT} now...`);
});
