const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Producto = sequelize.define('Producto', {
    producto_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_tienda: DataTypes.INTEGER,
    ID_categoria: DataTypes.INTEGER,
    ID_proveedor: DataTypes.INTEGER,
    codigoBarras: DataTypes.STRING,
    nombre: DataTypes.STRING,
    costo: DataTypes.FLOAT,
    precioVenta: DataTypes.FLOAT,
    disponible: DataTypes.INTEGER,
    disponibleMinimo: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN,
  });
  return Producto;
};
