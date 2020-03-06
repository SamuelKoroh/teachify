import HttpResponse from "../utils/httpResponse";

const validator = (schema, location = "body") => async (req, res, next) =>{
    try {
        await schema.validateAsync(req[location]);
        next()
    } catch (ex) {
        const errors = ex.details[0].message;

        HttpResponse.badRequest(res, errors);
    }
}

export default validator;
