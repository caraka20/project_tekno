const db = require("../models");

module.exports = {
  getByPermalink: async (permalink) => {
    try {
      const data = await db.tb_industri.findOne({ where: { permalink } });
      console.log(data);
      if (data === null) {
        return {
          isError: true,
          status: 409,
          message: "Industri Not Found",
        };
      }
      return { message: "Succes Get Industri By Permalink", data };
    } catch (error) {
      return error;
    }
  },
};
