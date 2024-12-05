"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_industri extends Model {
    static associate({ tb_mapping }) {
      this.hasMany(tb_mapping, { foreignKey: "id_industri", as: "mappings" });
    }
  }
  tb_industri.init(
    {
      nama_industri: DataTypes.STRING,
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
      modelName: "tb_industri",
    }
  );
  return tb_industri;
};
