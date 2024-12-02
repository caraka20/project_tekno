"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_industri extends Model {
    static associate({ tb_topik }) {
      this.hasMany(tb_topik, { foreignKey: "id_industri" });
    }
  }
  tb_industri.init(
    {
      nama_industri: DataTypes.INTEGER,
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
      modelName: "tb_industri",
    }
  );
  return tb_industri;
};
