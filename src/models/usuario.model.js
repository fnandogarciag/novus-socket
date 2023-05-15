import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";
import { relationOneToMany } from "./_index.js";
import Perfil from "./perfil.model.js";

const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nameUsuario: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  },
  {
    tableName: "usuarios"
  }
);

relationOneToMany({ One: Perfil, ToMany: Usuario, foreignKey: "roleId" });

export default Usuario;
