const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Categoria = sequelize.define('Categoria', {
    categoria_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
  });
  return Categoria;
};
