const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Tienda = sequelize.define('Tienda', {
    tienda_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    ID_ultimoPago: DataTypes.INTEGER,
    ID_propietario: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN,
  });
  return Tienda;
};
