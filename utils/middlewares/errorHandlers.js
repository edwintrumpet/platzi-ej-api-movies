const Boom = require('@hapi/boom')
const debug = require('debug')('app:error')
const { config } = require('../../config')

const withErrorStack = (error, stack) => {
    if(config.dev){
        return { ...error, stack }
    }
    return error
}

const logErrors = (err, req, res, next) => {
    debug(err)
    next(err)
}

const wrapErrors = (err, req, res, next) => {
    if(!err.isBoom){
        next(Boom.badImplementation(err))
    }
    next(err)
}

const errorHandler = (err, req, res, next) => { // eslint-disable-line
    const { output: { statusCode, payload } } = err
    res.status(statusCode)
    res.json(withErrorStack(payload, err.stack))
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
}