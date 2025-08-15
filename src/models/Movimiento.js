const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Movimiento = sequelize.define('Movimiento', {
    movimiento_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_producto: DataTypes.INTEGER,
    ID_usuario: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    motivo: DataTypes.STRING,
    fecha: DataTypes.DATE,
    estado: DataTypes.BOOLEAN,
  });
  return Movimiento;
};
