const { config } = require('../../config')

const withErrorStack = (error, stack) => {
    if(config.dev){
        return { error, stack }
    }
    return error
}

const logErrors = (err, req, res, next) => {
    console.log(err)
    next(err)
}

const errorHandler = (err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500)
    res.json(withErrorStack(err.message, err.stack))
}

module.exports = {
    logErrors,
    errorHandler
}