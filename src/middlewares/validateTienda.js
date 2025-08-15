const validateTienda = (req, res, next) => {
  const { nombre, ubicacion, telefono, estado, ID_ultimoPago, ID_propietario } = req.body;
  if (!nombre || !ubicacion || !telefono || typeof estado !== 'boolean' || !ID_propietario) {
    return res.status(400).json({ error: 'Invalid tienda data' });
  }
  next();
};

module.exports = validateTienda;
