const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Pago = sequelize.define('Pago', {
    pago_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_tienda: DataTypes.INTEGER,
    ID_plan: DataTypes.INTEGER,
    fechaPago: DataTypes.DATE,
    fechaExpiracion: DataTypes.DATE,
    estado: DataTypes.BOOLEAN,
  });
  return Pago;
};
