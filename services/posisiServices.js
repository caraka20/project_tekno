const db = require("../models");

module.exports = {
  getByPermalink: async (permalink) => {
    try {
      const data = await db.tb_posisi.findOne({ where: { permalink } });
      console.log(data);
      if (data === null) {
        return {
          isError: true,
          status: 409,
          message: "Posisi Not Found",
        };
      }
      return { message: "Succes Get Posisi By Permalink", data };
    } catch (error) {
      return error;
    }
  },
};
