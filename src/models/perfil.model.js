import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const Perfil = sequelize.define(
  "Perfiles",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nombrePerfil: DataTypes.STRING,
    descripcionPerfil: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  },
  {
    tableName: "Perfiles"
  }
);

export default Perfil;
