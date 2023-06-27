import ShipService from "../../services/ship.service";

export const handleCreateShip = async (
  name,
  avgPrice,
  imgUrl,
  utilityMounts,
  landingPadRequired,
  weaponsConfiguration,
  coreInternals,
  optionalInternals
) => {
  /**
   * Check Name Uniqueness
   */
  let ship = await ShipService.findByName(name);
  if (ship) throw new Error("Duplicate Ship");

  /**
   * If name is unique, create ship and return it
   */
  return ShipService.create(
    name,
    avgPrice,
    imgUrl,
    utilityMounts,
    landingPadRequired,
    weaponsConfiguration,
    coreInternals,
    optionalInternals
  );
};

export const handleFindShips = async (name, filter, order) => {
  if (name) {
    return ShipService.findByName(name);
  }

  /**
   * @TODO - ensure that the filter value is one of the
   * designated options (realistically a celebrate middleware)
   */

  if (!filter) filter = "name";
  if (!order) order = "asc";

  let sortParams;
  if (["name", "avgprice"].includes(filter.toLowerCase())) {
    sortParams = {
      [filter]:
        typeof order === "string" ? order : order === 1 ? "asc" : "desc",
    };
  } else {
    const keyLookup = {
      small: "weaponsConfiguration.class1",
      medium: "weaponsConfiguration.class2",
      large: "weaponsConfiguration.class3",
      huge: "weaponsConfiguration.class4",
    };
    sortParams = {
      [keyLookup[filter.toLowerCase()]]:
        typeof order === "string" ? order : order === 1 ? "asc" : "desc",
    };
  }
  return ShipService.findShips(sortParams);
};
