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
};
