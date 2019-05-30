const Joi = require('joi');


const needShape = {
    need: Joi.string().required(),
    brought_by_id: Joi.number().integer().required(),
    quantity: Joi.string()
};



