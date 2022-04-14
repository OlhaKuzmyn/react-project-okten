import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-яіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Модель повинна бути не менше 1 символа і не більше 20, обовязкова до заповнення, використовуючи лише букви'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {
    carValidator
}