const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Plan = sequelize.define('Plan', {
    plan_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    duracionDias: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
  });
  return Plan;
};
