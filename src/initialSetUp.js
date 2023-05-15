import sequelize from "./db/sequelize.js";
import Perfil from "./models/perfil.model.js";
import User from "./models/usuario.model.js";
import Georeferencia from "./models/georeferencia.model.js";
import Solicitud from "./models/solicitud.model.js";

const coordenadaRandom = (initial, number) => {
  return (initial * 10000 + Math.floor(Math.random() * number * 2) - number) / 10000;
};

const createRoles = async () => {
  const roles = ["ADMIN", "DRIVER"];
  try {
    const rolesToCreate = roles.map((role) => ({
      nombrePerfil: role,
      descripcionPerfil: "",
      estado: 1
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
      nameUsuario: "admin",
      roleId: 1,
      estado: 1
    });
    for (let i = 1; i <= 49; i++) {
      usersToCreate.push({
        nameUsuario: `driver${i}`,
        roleId: 2,
        estado: 1
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
        latRef: coordenadaRandom(4.675, 30),
        longRef: coordenadaRandom(-74.059, 30),
        coordenadasRef: "Mi casa",
        fechaRegistro: new Date()
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
    const solicitudToCreate = [];
    users.forEach((user) => {
      for (let index = 0; index < 10; index++) {
        solicitudToCreate.push({
          dirRecoleccion: `${coordenadaRandom(4.675, 100)},${coordenadaRandom(-74.059, 100)}`,
          dirEntrega: `${coordenadaRandom(4.675, 100)},${coordenadaRandom(-74.059, 100)}`,
          userId: user.id
        });
      }
    });
    await Solicitud.bulkCreate(solicitudToCreate);
  } catch (error) {
    console.log(error);
  }
};

const initApp_Db = async () => {
  try {
    await sequelize.sync({ force: true });
    createRoles();
    createUsers();
    createGeoReferencia();
    createSolicitud();
    console.log("Entro el initial");
  } catch (error) {
    console.log("connection error", error);
  }
};

export default initApp_Db;
