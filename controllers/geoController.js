const respHandler = require("../utils/respHandler");
const geoServices = require("../services/geoServices");

module.exports = {
  getByPermalink: async (req, res, next) => {
    try {
      const { permalink } = req.params;
      console.log(permalink);
      const result = await geoServices.getByPermalink(permalink);
      respHandler({ res, ...result });
    } catch (error) {
      next(error);
    }
  },
  getAllGeo: async (req, res) => {
    try {
      const { page, limit, sortBy, search } = req.query;

      const result = await geoServices.getAllGeo({
        page: Number(page) || 1,
        limit: Number(limit) || 15,
        sortBy: sortBy || "a-z",
        search: search || "",
      });

      //error handler
      if (result.isError) {
        return res.status(result.status || 500).json(result);
      }

      respHandler({ res, ...result });
    } catch (error) {
      res.status(500).json({ isError: true, message: error.message });
    }
  },
};
