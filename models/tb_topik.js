"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_topik extends Model {
    static associate({ tb_mapping }) {
      this.hasMany(tb_mapping, { foreignKey: "id_topik", as: "mappings" });
    }
  }
  tb_topik.init(
    {
      topik: DataTypes.STRING,
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
      modelName: "tb_topik",
    }
  );
  return tb_topik;
};
