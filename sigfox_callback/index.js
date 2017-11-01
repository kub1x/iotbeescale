var net = require('net');
var redisClient = require('redis').createClient();

const REDIS_IOTBEESCALE_LIST = 'iotbeescale-init_test';

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    //weight::int:16 hive::int:16 voltage::uint:8 raw::int:16 diffmin::uint:8 diffmax::uint:8 scale::int:16
    redisClient.rpush([REDIS_IOTBEESCALE_LIST, data]);
  });
});

const IP = '127.0.0.1';
const PORT = 13737;
server.listen(PORT, IP, function() {
  console.log(`Server listening on ${IP}:${PORT}`);
});
