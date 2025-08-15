const validateMovimiento = (req, res, next) => {
  const { ID_producto, ID_usuario, tipo, cantidad, motivo, fecha } = req.body;
  if (!ID_producto || !ID_usuario || !tipo || !cantidad || !motivo || !fecha) {
    return res.status(400).json({ error: 'Invalid movimiento data' });
  }
  next();
};

module.exports = validateMovimiento;
