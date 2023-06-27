export const errorHandler = async (error, req, res, next) => {
  console.log("Excuse me?", error);
  res.status(500).json(error);
};
