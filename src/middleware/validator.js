'use strict';

function validatorFunction() {
    return (req,res,next) => {

        if(req.query.name == 'osama'){
            req.name = req.query.name;
            next();
        } else {
            next(`Invalid query ${req.query.name}`)
        }
    }
}

module.exports = validatorFunction;