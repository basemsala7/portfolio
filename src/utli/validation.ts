import Joi from "joi";

export const contactValidation = (body: any) => {
  const schema = Joi.object({
    from: Joi.string().email({ tlds: false }).required().label("Email"),
    about: Joi.string().required().label("about"),
    description: Joi.string().required().label("message"),
  });
  return schema.validate(body);
};
