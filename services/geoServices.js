const db = require("../models");

module.exports = {
  getByPermalink: async (permalink) => {
    try {
      const data = await db.tb_geo.findOne({ where: { permalink } });
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
  getAllGeo: async ({ page, limit, sortBy, search }) => {
    try {
      const offset = (page - 1) * limit;
      const order =
        sortBy === "z-a" ? [["nama_geo", "DESC"]] : [["nama_geo", "ASC"]];
      const where = search
        ? { nama_geo: { [db.Sequelize.Op.like]: `%${search}%` } }
        : {};

      const data = await db.tb_geo.findAndCountAll({
        where,
        order,
        offset,
        limit,
      });
      console.log(data);

      if (data.rows.length === 0) {
        return { isError: true, status: 404, message: "No Geo Found" };
      }

      const totalPages = Math.ceil(data.count / limit);
      return {
        isError: false,
        message: "Success Get All Geo",
        data: {
          currentPage: page,
          totalPages,
          totalItems: data.count,
          items: data.rows,
        },
      };
    } catch (error) {
      return { isError: true, message: error.message };
    }
  },
};
