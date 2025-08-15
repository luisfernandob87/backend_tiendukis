const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    usuario_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: DataTypes.STRING,
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
  });
  return Usuario;
};
