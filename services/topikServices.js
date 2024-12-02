const db = require("../models");

module.exports = {
  getByPermalink: async (permalink) => {
    try {
      const data = await db.tb_topik.findOne({ where: { permalink } });
      console.log(data);
      if (data === null) {
        return {
          isError: true,
          status: 409,
          message: "Topik Not Found",
        };
      }
      return { message: "Succes Get Topik By Permalink", data };
    } catch (error) {
      return error;
    }
  },
};
