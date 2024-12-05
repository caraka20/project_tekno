const mappingService = require("../services/mappingServices");
const respHandler = require("../utils/respHandler");

module.exports = {
  getAllMappings: async (req, res) => {
    try {
      const result = await mappingService.getAllMappings(req.query);
      if (result.isError) {
        return res.status(500).json(result);
      }
      respHandler({ res, ...result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
