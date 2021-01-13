const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  console.log();
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: HAN');
  })

  return conn;
}


module.exports = { connect };