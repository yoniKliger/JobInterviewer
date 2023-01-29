const { routes } = require('./request/route');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const jsonParser = bodyParser.json()

routes.get.forEach(route => app.get(route.path, route.handler));
routes.post.forEach(route => app.post(route.path, jsonParser, route.handler));

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});