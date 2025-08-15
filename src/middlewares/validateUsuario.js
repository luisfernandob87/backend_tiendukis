const validateUsuario = (req, res, next) => {
  const { usuario, password, estado } = req.body;
  if (!usuario || !password || typeof estado !== 'boolean') {
    return res.status(400).json({ error: 'Invalid usuario data' });
  }
  next();
};

module.exports = validateUsuario;
