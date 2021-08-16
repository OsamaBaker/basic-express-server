'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerMiddleware = require('./middleware/logger');
const validatorMiddleware = require('./middleware/validator');

app.use(express.json());

app.use(loggerMiddleware)

app.get('/person', validatorMiddleware(), (req,res) => {
    const name = req.query.name
    res.json({
        name:name
    })
})











app.use('*', notFoundHandler);
app.use(errorHandler)

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}