// @flow
const routes = require('next-routes');

module.exports = routes()
  .add('film', '/film/:id')
  .add('index', '/search/:name');
