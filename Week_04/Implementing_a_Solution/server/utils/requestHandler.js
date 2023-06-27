export const requestHandler =
  (callback, extractedParams) => async (req, res, next) => {
    try {
      /**
       * Extract any parameters via the provided extractedParams function
       */
      const boundParams = extractedParams
        ? extractedParams(req, res, next)
        : [];

      const result = await callback(...boundParams);

      res.json(result || { message: "Ok" });
    } catch (error) {
      next(error);
    }
  };
