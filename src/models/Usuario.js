const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    usuario_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
  });
  return Usuario;
};
