/**
 * Esta función establece una relación de uno a uno entre dos modelos
 */
const relationOneToOne = ({ first, second, foreignKey }) => {
  first.hasOne(second, {
    foreignKey: {
      name: foreignKey,
      allowNull: false,
    },
    sourceKey: 'id',
  });
  second.belongsTo(first, {
    foreignKey: {
      name: foreignKey,
      allowNull: false,
    },
    targetKey: 'id',
  });
};

/**
 * Esta función establece una relación de uno a muchos entre dos modelos
 */
/**
 * This function establishes a one-to-many relationship between two models
 */
const relationOneToMany = ({ One, ToMany, foreignKey }) => {
  One.hasMany(ToMany, {
    foreignKey: {
      name: foreignKey,
      allowNull: false,
    },
    sourceKey: 'id',
  });
  ToMany.belongsTo(One, {
    foreignKey: {
      name: foreignKey,
      allowNull: false,
    },
    targetKey: 'id',
  });
};

/**
 * Esta función establece una relación de muchos a muchos entre dos modelos
 */
const relationManyToMany = ({
  first,
  second,
  table,
  firstForeignKey,
  secondForeignKey,
}) => {
  first.belongsToMany(second, {
    through: table,
    foreignKey: firstForeignKey,
    otherKey: secondForeignKey,
  });
  second.belongsToMany(first, {
    through: table,
    foreignKey: secondForeignKey,
    otherKey: firstForeignKey,
  });
};
export { relationOneToOne, relationOneToMany, relationManyToMany };
