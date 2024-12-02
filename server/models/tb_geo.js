"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_geo extends Model {
    static associate({ tb_topik, tb_posisi }) {
      this.hasMany(tb_topik, { foreignKey: "id_geo" });
      this.hasMany(tb_posisi, { foreignKey: "id_geo" });
    }
  }
  tb_geo.init(
    {
      nama_geo: DataTypes.INTEGER,
      permalink: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "tb_geo",
    }
  );
  return tb_geo;
};
