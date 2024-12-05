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
  getAllTopik: async (req, res) => {
    const result = await topikServices.getAllTopik();
    if (result.isError) {
      return res.status(result.status || 500).json(result);
    }
    respHandler({ res, ...result });
  },
};
