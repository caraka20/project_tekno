const respHandler = require("../utils/respHandler");
const industriServices = require("../services/industriServices");

module.exports = {
  getByPermalink: async (req, res, next) => {
    try {
      const { permalink } = req.params;
      const result = await industriServices.getByPermalink(permalink);
      respHandler({ res, ...result });
    } catch (error) {
      next(error);
    }
  },
};
