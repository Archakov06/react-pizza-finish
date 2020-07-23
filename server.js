const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({ static: './build' });
const port = process.env.PORT || 3000;

// server.use('/', express.static(path.join(__dirname, 'build')))

server.use(middlewares);
server.use(router);

server.listen(port);
