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
  getAllTopik: async () => {
    try {
      const data = await db.tb_topik.findAll();
      if (data.length === 0) {
        return {
          isError: true,
          status: 404,
          message: "No Topik Found",
        };
      }
      return { message: "Success Get All Topik", data };
    } catch (error) {
      return { isError: true, message: error.message };
    }
  },
};
