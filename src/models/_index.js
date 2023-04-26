/**
 * Esta función establece una relación de uno a uno entre dos modelos
 */
export const relationOneToOne = ({ first, second, foreignKey }) => {
  first.hasOne(second, {
    foreignKey: foreignKey,
    sourceKey: "id"
  });
  second.belongsTo(first, { foreignKey: foreignKey, targetKey: "id" });
};

/**
 * Esta función establece una relación de uno a muchos entre dos modelos
 */
/**
 * This function establishes a one-to-many relationship between two models
 */
export const relationOneToMany = ({ One, ToMany, foreignKey }) => {
  try {
    One.hasMany(ToMany, {
      foreignKey,
      sourceKey: "id"
    });
    ToMany.belongsTo(One, { foreignKey, targetKey: "id" });
  } catch (error) {
    console.log(One, ToMany, foreignKey);
  }
};

/**
 * Esta función establece una relación de muchos a muchos entre dos modelos
 */
export const relationManyToMany = ({ first, second, table, firstForeignKey, secondForeignKey }) => {
  first.belongsToMany(second, {
    through: table,
    foreignKey: firstForeignKey,
    otherKey: secondForeignKey
  });
  second.belongsToMany(first, {
    through: table,
    foreignKey: secondForeignKey,
    otherKey: firstForeignKey
  });
};
