const validateUsuarioTienda = (req, res, next) => {
  const { ID_usuario, ID_tienda, estado } = req.body;
  if (!ID_usuario || !ID_tienda || typeof estado !== 'boolean') {
    return res.status(400).json({ error: 'Invalid UsuarioTienda data' });
  }
  next();
};

module.exports = validateUsuarioTienda;
