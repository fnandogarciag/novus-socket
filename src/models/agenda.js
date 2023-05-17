import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';
import { relationOneToOne } from './_index.js';
import Solicitud from './solicitud.model.js';

const Agenda = sequelize.define(
  'agendas',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    latRecoleccion: DataTypes.DOUBLE,
    lngRecoleccion: DataTypes.DOUBLE,
    latRecReal: DataTypes.DOUBLE,
    lngRecReal: DataTypes.DOUBLE,
    latEntrega: DataTypes.DOUBLE,
    lngEntrega: DataTypes.DOUBLE,
    latEntReal: DataTypes.DOUBLE,
    lngEntReal: DataTypes.DOUBLE,
    order: DataTypes.SMALLINT,
  },
  {
    tableName: 'agendas',
  }
);

relationOneToOne({
  first: Solicitud,
  second: Agenda,
  foreignKey: 'solicitudId',
});

export default Agenda;
