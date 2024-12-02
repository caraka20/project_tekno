const respHandler = require("../utils/respHandler");
const topikServices = require("../services/topikServices");

module.exports = {
  getByPermalink: async (req, res, next) => {
    try {
      const { permalink } = req.params;
      const result = await topikServices.getByPermalink(permalink);
      respHandler({ res, ...result });
    } catch (error) {
      next(error);
    }
  },
};
