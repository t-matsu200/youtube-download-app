const http = require('http');
const utilFunc = require('./app/src/util-func');

const app = process.env.NODE_ENV === 'production' ? require('./dist/index') : require('./app/src/index');

const port = normalizePort(process.env.NODE_PORT || '8080');

app.set('port', port);

const server = http.createServer(app);

utilFunc.connectWs(server);

wireUpServer(server);

server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


function wireUpServer(httpServer) {
  let connections = {};
  httpServer.on('connection', function(conn) {
    const key = conn.remoteAddress + ':' + conn.remotePort;
    connections[key] = conn;
    conn.on('close', function() {
      delete connections[key];
    });
  });

  httpServer.destroy = function(cb) {
    httpServer.close(cb);
    for (const key in connections) {
      connections[key].destroy();
    }
  };
}


const gracefulShutdown = function() {
  server.destroy(() => {
    process.exit();
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

server.on('error', onError);
server.on('listening', onListening);

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}


function normalizePort(val) {
  let portNum = parseInt(val, 10);

  if (isNaN(portNum)) {
    return val;
  }

  if (portNum >= 0) {
    return portNum;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
