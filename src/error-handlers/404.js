'use strict';

module.exports = (req, res, next) => {
    const error = {
        status: 400,
        message: 'Not Found'
    }
    res.status(400).send(error)
}