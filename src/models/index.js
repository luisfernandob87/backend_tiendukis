const sequelize = require('../../config/database');
const Plan = require('./Plan')(sequelize);
const Pago = require('./Pago')(sequelize);
const Propietario = require('./Propietario')(sequelize);
const Tienda = require('./Tienda')(sequelize);
const Usuario = require('./Usuario')(sequelize);
const UsuarioTienda = require('./UsuarioTienda')(sequelize);
const Producto = require('./Producto')(sequelize);
const Movimiento = require('./Movimiento')(sequelize);
const Categoria = require('./Categoria')(sequelize);
const Proveedor = require('./Proveedor')(sequelize);

// Relaciones
Propietario.hasMany(Tienda, { foreignKey: 'ID_propietario' });
Tienda.belongsTo(Propietario, { foreignKey: 'ID_propietario' });

Tienda.hasMany(UsuarioTienda, { foreignKey: 'ID_tienda' });
UsuarioTienda.belongsTo(Tienda, { foreignKey: 'ID_tienda' });

Usuario.hasMany(UsuarioTienda, { foreignKey: 'ID_usuario' });
UsuarioTienda.belongsTo(Usuario, { foreignKey: 'ID_usuario' });

Tienda.hasMany(Producto, { foreignKey: 'ID_tienda' });
Producto.belongsTo(Tienda, { foreignKey: 'ID_tienda' });

Producto.hasMany(Movimiento, { foreignKey: 'ID_producto' });
Movimiento.belongsTo(Producto, { foreignKey: 'ID_producto' });

Usuario.hasMany(Movimiento, { foreignKey: 'ID_usuario' });
Movimiento.belongsTo(Usuario, { foreignKey: 'ID_usuario' });

Tienda.hasMany(Pago, { foreignKey: 'ID_tienda' });
Pago.belongsTo(Tienda, { foreignKey: 'ID_tienda' });

Plan.hasMany(Pago, { foreignKey: 'ID_plan' });
Pago.belongsTo(Plan, { foreignKey: 'ID_plan' });

Proveedor.hasMany(Producto, { foreignKey: 'ID_proveedor' });
Producto.belongsTo(Proveedor, { foreignKey: 'ID_proveedor' });

Categoria.hasMany(Producto, { foreignKey: 'ID_categoria' });
Producto.belongsTo(Categoria, { foreignKey: 'ID_categoria' });

module.exports = {
  sequelize,
  Plan,
  Pago,
  Propietario,
  Tienda,
  Usuario,
  UsuarioTienda,
  Producto,
  Movimiento,
  Categoria,
  Proveedor,
};
