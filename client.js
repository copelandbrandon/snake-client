const net = require('net');
//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });
  
  //interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', ()=>{
    console.log('Connection established to game server');
    conn.write('Name: BKC');

  });

  conn.on('data', (message)=>{
    console.log('Server sent:', message);

  });
  return conn;
};

console.log('Connecting ...');

module.exports = {
  connect
};