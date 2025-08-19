const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Proveedor = sequelize.define('Proveedor', {
    proveedor_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
  });
  return Proveedor;
};
