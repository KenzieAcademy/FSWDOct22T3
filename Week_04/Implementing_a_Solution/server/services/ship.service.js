import Ship from "../models/ship.model";

const ShipService = {
  findShips: async (sortParams) => {
    return Ship.find().sort(sortParams);
  },
  findByName: async (name) => {
    console.log("LOOKING FOR");
    return Ship.findOne({ name: { $regex: new RegExp(name, "i") } });
  },
  create: async (
    name,
    avgPrice,
    imgUrl,
    utilityMounts,
    landingPadRequired,
    weaponsConfiguration,
    coreInternals,
    optionalInternals
  ) => {
    return Ship.create({
      name,
      avgPrice,
      imgUrl,
      utilityMounts,
      landingPadRequired,
      weaponsConfiguration,
      coreInternals,
      optionalInternals,
    });
  },
};

export default ShipService;
