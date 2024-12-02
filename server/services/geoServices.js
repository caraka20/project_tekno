const db = require("../models");

module.exports = {
  getByPermalink: async (permalink) => {
    try {
      const data = await db.tb_geo.findOne({ where: { permalink } });
      console.log(data);
      if (data === null) {
        return {
          isError: true,
          status: 409,
          message: "Geo Not Found",
        };
      }
      return { message: "Succes Get Geo By Permalink", data };
    } catch (error) {
      return error;
    }
  },
};
