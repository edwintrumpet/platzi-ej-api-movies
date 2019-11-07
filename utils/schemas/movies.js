const Joi = require('@hapi/joi')

const movieIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)
const movieTitleSchema = Joi.string().max(80)
const movieyearSchema = Joi.number().min(1888).max(2077)
const movieCoverSchema = Joi.string().uri()
const movieDescriptionSchema = Joi.string().max(300)
const movieDurationSchema = Joi.number().min(1).max(300)
const movieContentRatingSchema = Joi.string().max(5)
const movieSourceSchema = Joi.string().uri()
const movieTagsSchema = Joi.array().items(Joi.string().max(50))

const createMovieSchema = {
    title: movieTitleSchema.required(),
    year: movieyearSchema.required(),
    cover: movieCoverSchema.required(),
    description: movieDescriptionSchema.required(),
    duration: movieDurationSchema.required(),
    contentRating: movieContentRatingSchema.required(),
    source: movieSourceSchema.required(),
    tags: movieTagsSchema
}

const updateMovieSchema = {
    title: movieTitleSchema,
    year: movieyearSchema,
    cover: movieCoverSchema,
    description: movieDescriptionSchema,
    duration: movieDurationSchema,
    contentRating: movieContentRatingSchema,
    source: movieSourceSchema,
    tags: movieTagsSchema
}

module.exports = {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
}
