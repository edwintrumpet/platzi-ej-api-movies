const Boom = require('@hapi/boom')
const Joi = require('@hapi/joi')

const validate = (data, schema) => {
    const { error } = Joi.object(schema).validate(data, schema)
    return error
}

const validationHandler = (schema, check = 'body') => {
    return (req, res, next) => {
        const error = validate(req[check], schema)
        error ? next(Boom.badRequest(error)) : next()
    }
}

module.exports = validationHandler
