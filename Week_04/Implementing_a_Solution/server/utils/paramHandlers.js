export const handleCreateShipParams = (req) => [
  req.body.name,
  req.body.avgPrice,
  req.body.imgUrl,
  req.body.utilityMounts,
  req.body.landingPadRequired,
  req.body.weaponsConfiguration,
  req.body.coreInternals,
  req.body.optionalInternals,
];

export const handleFindShipsParams = (req) => [
  req.query.name,
  req.query.filter,
  req.query.order,
];
