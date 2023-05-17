import { Client } from '@googlemaps/google-maps-services-js';
const client = new Client();

import Config from './config/index.js';

import sequelize from './db/sequelize.js';
import Perfil from './models/perfil.model.js';
import User from './models/usuario.model.js';
import Georeferencia from './models/georeferencia.model.js';
import Solicitud from './models/solicitud.model.js';
import Agenda from './models/agenda.js';

const NovusGPS = { lat: 4.676097426405479, lng: -74.0585420464184 };

const coordenadaRandom = (initial, number) => {
  return (
    (initial * 10000 + Math.floor(Math.random() * number * 2) - number) / 10000
  );
};

const createRoles = async () => {
  const roles = ['ADMIN', 'DRIVER'];
  try {
    const rolesToCreate = roles.map((role) => ({
      nombrePerfil: role,
      descripcionPerfil: '',
      estado: 1,
    }));
    await Perfil.bulkCreate(rolesToCreate);
  } catch (error) {
    console.error(error);
  }
};
const createUsers = async () => {
  try {
    const usersToCreate = [];
    usersToCreate.push({
      nameUsuario: 'admin',
      roleId: 1,
      estado: 1,
    });
    for (let i = 1; i <= 49; i++) {
      usersToCreate.push({
        nameUsuario: `driver${i}`,
        roleId: 2,
        estado: 1,
      });
    }
    await User.bulkCreate(usersToCreate);
  } catch (error) {
    console.log(error);
  }
};

const createGeoReferencia = async () => {
  try {
    const users = await User.findAll();
    const georeferenciaToCreate = [];
    users.forEach((user) => {
      georeferenciaToCreate.push({
        userId: user.id,
        lat: NovusGPS.lat,
        lng: NovusGPS.lng,
        coordenadasRef: 'Mi casa',
        fechaRegistro: new Date(),
      });
    });
    await Georeferencia.bulkCreate(georeferenciaToCreate);
  } catch (error) {
    console.log(error);
  }
};

const createSolicitud = async () => {
  try {
    const users = await User.findAll();
    for (const user of users) {
      const coordenadas = {
        latRec: NovusGPS.lat,
        lngRec: NovusGPS.lng,
        latEnt: coordenadaRandom(4.675, 100),
        lngEnt: coordenadaRandom(-74.059, 100),
      };
      const recCoordenadas = await client.reverseGeocode({
        params: {
          key: Config.googleMapsApiKey,
          latlng: { lat: coordenadas.latRec, lng: coordenadas.lngRec },
        },
      });
      const dirRecoleccion = recCoordenadas.data.results[0].formatted_address;
      const entCoordenadas = await client.reverseGeocode({
        params: {
          key: Config.googleMapsApiKey,
          latlng: { lat: coordenadas.latEnt, lng: coordenadas.lngEnt },
        },
      });
      const dirEntrega = entCoordenadas.data.results[0].formatted_address;
      const solicitud = await Solicitud.create({
        dirRecoleccion,
        dirEntrega,
        userId: user.id,
      });
      await Agenda.create({
        latRecoleccion: coordenadas.latRec,
        lngRecoleccion: coordenadas.lngRec,
        latEntrega: coordenadas.latEnt,
        lngEntrega: coordenadas.lngEnt,
        solicitudId: solicitud.id,
      });
      for (let index = 0; index < 9; index++) {
        const coordenadas = {
          latRec: coordenadaRandom(4.675, 100),
          lngRec: coordenadaRandom(-74.059, 100),
          latEnt: coordenadaRandom(4.675, 100),
          lngEnt: coordenadaRandom(-74.059, 100),
        };
        const recCoordenadas = await client.reverseGeocode({
          params: {
            key: Config.googleMapsApiKey,
            latlng: { lat: coordenadas.latRec, lng: coordenadas.lngRec },
          },
        });
        const dirRecoleccion = recCoordenadas.data.results[0].formatted_address;
        const entCoordenadas = await client.reverseGeocode({
          params: {
            key: Config.googleMapsApiKey,
            latlng: { lat: coordenadas.latEnt, lng: coordenadas.lngEnt },
          },
        });
        const dirEntrega = entCoordenadas.data.results[0].formatted_address;
        const solicitud = await Solicitud.create({
          dirRecoleccion,
          dirEntrega,
          userId: user.id,
        });
        await Agenda.create({
          latRecoleccion: coordenadas.latRec,
          lngRecoleccion: coordenadas.lngRec,
          latEntrega: coordenadas.latEnt,
          lngEntrega: coordenadas.lngEnt,
          solicitudId: solicitud.id,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const initApp_Db = async () => {
  try {
    await sequelize.sync({ force: true });
    await createRoles();
    await createUsers();
    await createGeoReferencia();
    await createSolicitud();
    console.log('Entro el initial');
  } catch (error) {
    console.log('connection error', error);
  }
};

export default initApp_Db;
