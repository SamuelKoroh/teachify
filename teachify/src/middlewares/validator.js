import HttpResponse from "../utils/httpResponse";

const validator = (schema, location = "body") => async (req, res, next) =>{
    try {
        await schema.validateAsync(req[location], {abortEarly: false});
        next()
    } catch (ex) {
        const errors = ex.details.map(e => ({ key: e.context.key, message: e.message }));

        HttpResponse.badRequest(res, errors);
    }
}

export default validator;
