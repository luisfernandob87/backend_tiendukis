const validatePago = (req, res, next) => {
  const { ID_tienda, ID_plan, fechaPago, fechaExpiracion, estado } = req.body;
  if (!ID_tienda || !ID_plan || !fechaPago || !fechaExpiracion || typeof estado !== 'boolean') {
    return res.status(400).json({ error: 'Invalid pago data' });
  }
  next();
};

module.exports = validatePago;
