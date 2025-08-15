const express = require('express');
const PlanRoutes = require('./routes/PlanRoutes');
const PagoRoutes = require('./routes/PagoRoutes');
const PropietarioRoutes = require('./routes/PropietarioRoutes');
const TiendaRoutes = require('./routes/TiendaRoutes');
const UsuarioRoutes = require('./routes/UsuarioRoutes');
const UsuarioTiendaRoutes = require('./routes/UsuarioTiendaRoutes');
const ProductoRoutes = require('./routes/ProductoRoutes');
const MovimientoRoutes = require('./routes/MovimientoRoutes');

const app = express();

app.use(express.json());
app.use('/api/plans', PlanRoutes);
app.use('/api/pagos', PagoRoutes);
app.use('/api/propietarios', PropietarioRoutes);
app.use('/api/tiendas', TiendaRoutes);
app.use('/api/usuarios', UsuarioRoutes);
app.use('/api/usuarios-tiendas', UsuarioTiendaRoutes);
app.use('/api/productos', ProductoRoutes);
app.use('/api/movimientos', MovimientoRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
