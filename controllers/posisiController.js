const respHandler = require("../utils/respHandler");
const posisiServices = require("../services/posisiServices");

module.exports = {
  getByPermalink: async (req, res, next) => {
    try {
      const { permalink } = req.params;
      const result = await posisiServices.getByPermalink(permalink);
      respHandler({ res, ...result });
    } catch (error) {
      next(error);
    }
  },
};
