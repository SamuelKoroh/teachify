import  Joi  from "@hapi/joi";
/**
 * @typedef {import('@hapi/joi')} Joi
 */
export const becomeInstructorSchema = Joi.object({
    title: Joi.string().required().label('Title'),
    description: Joi.string().required().label('Description'),
    experience: Joi.string().required().label('Exprience'),
    course: Joi.string().required().label('Course'),
    hourlyRate: Joi.string().required().label('Hourly Rate'),
    city: Joi.string().required().label('City'),
    language: Joi.string().required().label('Language'),
    nationality: Joi.string().required().label('Nationality'),
    education: Joi.string().required().label('Education'),
});

