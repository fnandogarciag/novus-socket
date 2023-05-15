import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

import User from "./usuario.model.js";
import { relationOneToMany } from "./_index.js";

const Georeferencia = sequelize.define(
  "georeferencias",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    latRef: DataTypes.DOUBLE,
    longRef: DataTypes.DOUBLE,
    coordenadasRef: DataTypes.STRING,
    fechaRegistro: DataTypes.DATE
  },
  {
    tableName: "georeferencias"
  }
);

relationOneToMany({ One: User, ToMany: Georeferencia, foreignKey: "userId" });

export default Georeferencia;
