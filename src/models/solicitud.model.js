import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

import User from "./usuario.model.js";
import { relationOneToMany } from "./_index.js";

const Solicitud = sequelize.define(
  "solicitudes",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    dirRecoleccion: DataTypes.STRING,
    dirEntrega: DataTypes.STRING
  },
  {
    tableName: "solicitudes"
  }
);

relationOneToMany({ One: User, ToMany: Solicitud, foreignKey: "userId" });

export default Solicitud;
