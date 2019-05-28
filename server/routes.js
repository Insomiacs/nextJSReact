const routes = require('next-routes')

// Name   Page      Pattern
module.exports = routes()
    .add('film', '/film/:id')
    .add('index', '/search/:name');
