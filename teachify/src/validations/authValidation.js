import  Joi  from "@hapi/joi";

export const registerSchema = Joi.object({
    firstName: Joi.string().required().label('First Name'),
    lastName: Joi.string().required().label('Last Name'),
    gender: Joi.string().required().label('Gender'),
    phone: Joi.string().required().label('Phone Number'),
    email: Joi.string().required().label('Email').email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().label('Password').pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

export const loginSchema = Joi.object({
    email: Joi.string().required().label('Email').email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().label('Password').pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});