const createRoles = async () => {
  const Role = require("./models/role.model");
  const roles = ["ADMIN", "DRIVER"];
  try {
    const rolesToCreate = roles.map((role) => ({ name: role }));
    await Role.bulkCreate(rolesToCreate);
  } catch (error) {
    console.error(error);
  }
};

const createUsers = async () => {
  const User = require("./models/user.model");
  try {
    const usersToCreate = [];
    usersToCreate.push({
      name: "admin",
      roleId: 1
    });
    for (let i = 1; i <= 49; i++) {
      usersToCreate.push({
        name: `driver${i}`,
        roleId: 2
      });
    }
    await User.bulkCreate(usersToCreate);
  } catch (error) {
    console.log(error);
  }
};

const createHistories = async () => {
  const History = require("./models/history.model");
  try {
    const historiesToCreate = [];
    for (let index = 1; index <= 10; index++) {
      if (index % 3 !== 1) {
        historiesToCreate.push({
          xPos: (-740570 - index * index) / 10000,
          yPos: (46750 + index * index) / 10000,
          userId: 5
        });
      }
    }
    await History.bulkCreate(historiesToCreate);
  } catch (error) {
    console.log(error);
  }
};

const initApp_Db = async () => {
  console.log("Entro el initial");
  const sequelize = require("./db/sequelize");
  try {
    await sequelize.sync({ force: true });
    await createRoles();
    await createUsers();
    await createHistories();
  } catch (error) {
    console.log("connection error", error);
  }
};

module.exports = initApp_Db;
