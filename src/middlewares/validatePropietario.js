const validatePropietario = (req, res, next) => {
  const { nombre, email, password, estado } = req.body;
  if (!nombre || !email || !password || typeof estado !== 'boolean') {
    return res.status(400).json({ error: 'Invalid propietario data' });
  }
  next();
};

module.exports = validatePropietario;
