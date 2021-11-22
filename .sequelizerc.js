const path = require('path');

module.exports = {
  'config': path.resolve('server', 'database'),
  'models-path': path.resolve('server', 'models'),
  'seeders-path': path.resolve('database', 'seeders'),
  'migrations-path': path.resolve('database', 'migrations'),
};
