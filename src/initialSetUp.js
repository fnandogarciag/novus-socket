import sequelize from "./db/sequelize";
import User from "./models/user.model";
import Role from "./models/role.model";
import Company from "./models/company.model";
import History from "./models/history.model";

const companies = ["Novus", "GoPass", "AVVillas"];
const roles = ["ADMIN", "DRIVER"];

const createCompanies = async () => {
  try {
    const companiesToCreate = companies.map((company) => ({ name: company }));
    await Company.bulkCreate(companiesToCreate);
  } catch (error) {
    console.error(error);
  }
};

const createRoles = async () => {
  try {
    const rolesToCreate = roles.map((role) => ({ name: role }));
    await Role.bulkCreate(rolesToCreate);
  } catch (error) {
    console.error(error);
  }
};

const createUsers = async () => {
  try {
    const usersToCreate = [];
    companies.forEach((company, cindex) => {
      roles.forEach((role, rindex) => {
        for (let i = 0; i < rindex + 1; i++) {
          usersToCreate.push({
            name: `${company}${role}${i}`,
            roleId: rindex + 1,
            companyId: cindex + 1
          });
        }
      });
    });
    await User.bulkCreate(usersToCreate);
  } catch (error) {
    console.log(error);
  }
};

const createHistories = async () => {
  try {
    const historiesToCreate = [];
    for (let index = 1; index <= 9; index++) {
      if (index % 3 !== 1) {
        historiesToCreate.push({
          xPos: (-740570 - index) / 10000,
          yPos: (46750 + index) / 10000,
          userId: index
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
  try {
    await sequelize.sync({ force: true });
    await createCompanies();
    await createRoles();
    await createUsers();
    await createHistories();
  } catch (error) {
    console.log("connection error", error);
  }
};

module.exports = initApp_Db;
