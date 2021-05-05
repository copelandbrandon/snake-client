const net = require('net');
const {connect} = require('./client');
const {setupInput} = require('./input');

setupInput();
connect();
