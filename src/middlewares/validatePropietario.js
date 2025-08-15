const validatePropietario = (req, res, next) => {
  const { nombre, email, password, rol, estado } = req.body;
  if (!nombre || !email || !password || !rol || typeof estado !== 'boolean') {
    return res.status(400).json({ error: 'Invalid propietario data' });
  }
  next();
};

module.exports = validatePropietario;
