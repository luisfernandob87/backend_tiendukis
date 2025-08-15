const { Producto } = require('../models');

const ProductoController = {
  async create(req, res) {
    try {
      const producto = await Producto.create(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const productos = await Producto.findAll();
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (!producto) return res.status(404).json({ error: 'Producto not found' });
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Producto.update(req.body, {
        where: { producto_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Producto not found' });
      res.status(200).json({ message: 'Producto updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Producto.destroy({ where: { producto_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Producto not found' });
      res.status(200).json({ message: 'Producto deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ProductoController;
