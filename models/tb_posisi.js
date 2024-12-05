"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_posisi extends Model {
    static associate({tb_mapping, tb_geo}) {
      this.hasMany(tb_mapping, { foreignKey: "id_posisi", as: "mappings" });
      this.belongsTo(tb_geo, { foreignKey: "id_geo" });
    }
  }
  tb_posisi.init(
    {
      nama_posisi: DataTypes.STRING,
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
      modelName: "tb_posisi",
    }
  );
  return tb_posisi;
};
