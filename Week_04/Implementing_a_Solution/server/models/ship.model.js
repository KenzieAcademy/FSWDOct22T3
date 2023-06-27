import { Schema, model } from "mongoose";

const MODULE_CLASS_TYPE = {
  type: Number,
  min: 0,
  max: 5,
};

const ShipSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  avgPrice: {
    type: Number,
    min: 0,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  utilityMounts: {
    type: Number,
    required: true,
    min: 1,
    max: 15,
  },
  landingPadRequired: {
    type: String,
    enum: ["small", "medium", "large"],
    required: true,
  },
  weaponsConfiguration: {
    class1: MODULE_CLASS_TYPE,
    class2: MODULE_CLASS_TYPE,
    class3: MODULE_CLASS_TYPE,
    class4: MODULE_CLASS_TYPE,
  },
  coreInternals: {
    powerPlant: {
      type: Number,
      min: 1,
      max: 8,
    },
    fsdDrives: {
      type: Number,
      min: 1,
      max: 8,
    },
    drives: {
      type: Number,
      min: 1,
      max: 8,
    },
  },
  optionalInternals: {
    class1: MODULE_CLASS_TYPE,
    class2: MODULE_CLASS_TYPE,
    class3: MODULE_CLASS_TYPE,
    class4: MODULE_CLASS_TYPE,
    class5: MODULE_CLASS_TYPE,
    class6: MODULE_CLASS_TYPE,
    class7: MODULE_CLASS_TYPE,
    class8: MODULE_CLASS_TYPE,
  },
});

const Ship = model("Ship", ShipSchema);

export default Ship;
