const validateProducto = (req, res, next) => {
  const { ID_tienda, codigoBarras, nombre, precioCompra, precioVenta, disponible, disponibleMinimo } = req.body;
  if (!ID_tienda || !nombre || !precioCompra || !precioVenta || disponible === undefined || disponibleMinimo === undefined) {
    return res.status(400).json({ error: 'Invalid producto data' });
  }
  next();
};

module.exports = validateProducto;
