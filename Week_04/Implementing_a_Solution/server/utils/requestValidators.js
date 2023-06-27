import { Joi, Segments, celebrate } from "celebrate";

export const validateCreateShip = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    avgPrice: Joi.number().integer().min(0),
    imgUrl: Joi.string().required(),
    utilityMounts: Joi.number().integer().min(0).max(15).required(),
    landingPadRequired: Joi.string().valid("small", "medium", "large"),
    weaponsConfiguration: Joi.object().keys({
      class1: Joi.number().min(0).max(5).required(),
      class2: Joi.number().min(0).max(5).required(),
      class3: Joi.number().min(0).max(5).required(),
      class4: Joi.number().min(0).max(5).required(),
    }),
    coreInternals: Joi.object().keys({
      powerPlant: Joi.number().min(1).max(8).required(),
      fsdDrives: Joi.number().min(1).max(8).required(),
      drives: Joi.number().min(1).max(8).required(),
    }),
    optionalInternals: Joi.object().keys({
      class1: Joi.number().min(0).max(5).required(),
      class2: Joi.number().min(0).max(5).required(),
      class3: Joi.number().min(0).max(5).required(),
      class4: Joi.number().min(0).max(5).required(),
      class5: Joi.number().min(0).max(5).required(),
      class6: Joi.number().min(0).max(5).required(),
      class7: Joi.number().min(0).max(5).required(),
      class8: Joi.number().min(0).max(5).required(),
    }),
  }),
});
