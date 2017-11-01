require('dotenv').config();
var net = require('net');
var redisClient = require('redis').createClient();

const REDIS_IOTBEESCALE_LIST = process.env.REDIS_IOTBEESCALE_LIST;
var server = net.createServer(function(socket) {
  console.log(`Client connected from: ${socket.remoteAddress}:${socket.remotePort}`);
  socket.on('data', function(data) {
    console.log(`${socket.remoteAddress}:${socket.remotePort} sent data: ${data}`);
    // Expected data structure:
    //weight::int:16 hive::int:16 voltage::uint:8 raw::int:16 diffmin::uint:8 diffmax::uint:8 scale::int:16
    redisClient.rpush([REDIS_IOTBEESCALE_LIST, data]);
    socket.end(function() {
      console.log(`Connection to ${socket.remoteAddress}:${socket.remotePort} was ended.`);
    });
  });
});


const HOST = process.env.HOST;
const PORT = process.env.PORT;
server.listen(PORT, HOST, function() {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
