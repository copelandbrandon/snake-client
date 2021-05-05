const net = require('net');
const {moveUp, moveLeft, moveRight, moveDown, messages} = require('./constants');
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
    connection.write(moveUp);
  } else if (key === 'a') {
    connection.write(moveLeft);
  } else if (key === 's') {
    connection.write(moveDown);
  } else if (key === 'd') {
    connection.write(moveRight);
  } else if (Object.keys(messages).includes(key)) { //prints messages
    connection.write(messages[key])
  }

  
};



module.exports = {
  setupInput
};