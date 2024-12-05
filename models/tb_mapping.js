"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_mapping extends Model {
    static associate({ tb_geo, tb_industri, tb_posisi, tb_topik }) {
      this.belongsTo(tb_geo, { foreignKey: "id_geo", as: "geo" });
      this.belongsTo(tb_industri, { foreignKey: "id_industri", as: "industri" });
      this.belongsTo(tb_posisi, { foreignKey: "id_posisi", as: "posisi" });
      this.belongsTo(tb_topik, { foreignKey: "id_topik", as: "topik" });
    }
  }
  tb_mapping.init(
    {
      placeholder: DataTypes.STRING,
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
      modelName: "tb_mapping",
    }
  );
  return tb_mapping;
};
