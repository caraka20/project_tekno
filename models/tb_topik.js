"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_topik extends Model {
    static associate({ tb_industri, tb_geo, tb_posisi }) {
      this.belongsTo(tb_industri, { foreignKey: "id_industri" });
      this.belongsTo(tb_geo, { foreignKey: "id_geo" });
      this.belongsTo(tb_posisi, { foreignKey: "id_posisi" });
    }
  }
  tb_topik.init(
    {
      topik: DataTypes.INTEGER,
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
      modelName: "tb_topik",
    }
  );
  return tb_topik;
};
