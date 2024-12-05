"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_geo extends Model {
    static associate({ tb_mapping, tb_posisi }) {
      this.hasMany(tb_mapping, { foreignKey: "id_geo", as: "mappings" });
      this.hasMany(tb_posisi, { foreignKey: "id_geo" });
    }
  }
  tb_geo.init(
    {
      nama_geo: DataTypes.STRING,
      permalink: DataTypes.STRING,
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
