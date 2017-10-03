const Hapi = require('hapi');
const Inert = require('inert');
const _ = require('lodash');

module.exports = (options) => {
  const defaults = {
    port: '3000',
    host: 'localhost',
    app: {},
    routes: [],
  };

  const serverOptions = _.assign({}, defaults, options);
  const { port, host, app } = serverOptions;
  const routes = [
    {
      method: 'GET',
      path:'/',
      handler: (request, reply) => reply(app),
    },
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: 'public'
          }
      }
    }
  ];
  const server = new Hapi.Server({ port, host });
  // server.connection({ port, host });

  server.route(routes);
  // server.register(Inert)

  server.start((err) => {
    if (err) {
      throw err;
    }
    if (process.send) {
      process.send({ event:'online', url:'server.info.uri' });
    }
    console.log('Server running at:', server.info.uri);
  });
}
