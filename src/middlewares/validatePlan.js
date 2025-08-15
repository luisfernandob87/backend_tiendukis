const validatePlan = (req, res, next) => {
  const { nombre, duracionDias, precio, descripcion, estado } = req.body;
  if (!nombre || !duracionDias || !precio || typeof estado !== 'boolean') {
    return res.status(400).json({ error: 'Invalid plan data' });
  }
  next();
};

module.exports = validatePlan;
