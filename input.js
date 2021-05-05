const net = require('net');
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //terminate program
  if (key === '\u0003') {
    console.log('Connection terminated by user');
    process.exit();
  } else if (key === 'w') { //start of movement keys
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'u') { //start of canned messages
    connection.write('Say: Howdy!')
  } else if (key === 'i') {
    connection.write('Say: Gotta Go Fast')
  } else if (key === 'o') {
    connection.write('Say: Zoom Zoom')
  } else if (key === 'p') {
    connection.write('Say: Bye Bye!')
  }
};



module.exports = {
  setupInput
};