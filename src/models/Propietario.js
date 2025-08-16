const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Propietario = sequelize.define('Propietario', {
    propietario_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
  });
  return Propietario;
};
