const db = require("../models");

module.exports = {
  getAllMappings: async ({
    geo,
    industri,
    posisi,
    topik,
    search,
    sortBy,
    page,
    pageSize,
  }) => {
    try {
      page = Number(page) || 1;
      pageSize = Number(pageSize) || 10;

      if (isNaN(page) || page <= 0) {
        return { isError: true, message: "Invalid 'page' parameter" };
      }
      if (isNaN(pageSize) || pageSize <= 0) {
        return { isError: true, message: "Invalid 'pageSize' parameter" };
      }

      // Sorting
      const order = [];
      if (sortBy === "a-z") {
        order.push(["id_geo", "ASC"]);
      } else if (sortBy === "z-a") {
        order.push(["id_geo", "DESC"]);
      }

      // Dynamic Where Clause
      const where = {};

      if (search) {
        where["$geo.nama_geo$"] = { [db.Sequelize.Op.like]: `%${search}%` };
      }

      if (geo) {
        const geoData = await db.tb_geo.findOne({ where: { nama_geo: geo } });
        if (geoData) {
          where.id_geo = geoData.id;
        }
      }

      if (industri) {
        const industriData = await db.tb_industri.findOne({
          where: { nama_industri: industri },
        });
        if (industriData) {
          where.id_industri = industriData.id;
        }
      }

      if (posisi) {
        const posisiData = await db.tb_posisi.findOne({
          where: { nama_posisi: posisi },
        });
        if (posisiData) {
          where.id_posisi = posisiData.id;
        }
      }

      if (topik) {
        const topikData = await db.tb_topik.findOne({ where: { topik } });
        if (topikData) {
          where.id_topik = topikData.id;
        }
      }

      // Pagination
      const offset = (page - 1) * pageSize;
      const limit = pageSize;

      // Query
      const allMappings = await db.tb_mapping.findAndCountAll({
        where,
        include: [
          {
            model: db.tb_geo,
            as: "geo",
            attributes: ["id", "nama_geo", "permalink"],
          },
          {
            model: db.tb_industri,
            as: "industri",
            attributes: ["id", "nama_industri", "permalink"],
          },
          {
            model: db.tb_posisi,
            as: "posisi",
            attributes: ["id", "nama_posisi", "permalink"],
          },
          {
            model: db.tb_topik,
            as: "topik",
            attributes: ["id", "topik", "permalink"],
          },
        ],
        attributes: ["id", "id_geo", "id_industri", "id_posisi", "id_topik"],
        order,
        offset,
        limit,
      });

      // Response
      const totalPages = Math.ceil(allMappings.count / pageSize);

      return {
        isError: false,
        message: "Success Get All Mappings",
        data: {
          currentPage: page,
          totalPages,
          totalItems: allMappings.count,
          items: allMappings.rows,
        },
      };
    } catch (error) {
      return { isError: true, message: error.message };
    }
  },
};
