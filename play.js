const net = require('net');
const connect = require('./client').connect;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log('Connection terminated by user');
    process.exit();
  }
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


setupInput();
connect();
