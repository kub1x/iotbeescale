var net = require('net');
var redisClient = require('redis').createClient();

const REDIS_IOTBEESCALE_LIST = 'iotbeescale';

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    redisClient.rpush([REDIS_IOTBEESCALE_LIST, data]);
  });
});

server.listen(1337, '127.0.0.1');
