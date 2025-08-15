const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const UsuarioTienda = sequelize.define('UsuarioTienda', {
    usuarioTienda_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_usuario: DataTypes.INTEGER,
    ID_tienda: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN,
  });
  return UsuarioTienda;
};
