const { Prooveedor } = require('../models');

const ProoveedorController = {
  async create(req, res) {
    try {
      const Prooveedor = await Prooveedor.create(req.body);
      res.status(201).json(Prooveedor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const proveedores = await Prooveedor.findAll();
      res.status(200).json(proveedores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const proveedor = await Prooveedor.findByPk(req.params.id);
      if (!proveedor) return res.status(404).json({ error: 'proveedor not found' });
      res.status(200).json(proveedor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Prooveedor.update(req.body, {
        where: { proveedor_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Proveedor not found' });
      res.status(200).json({ message: 'Proveedor updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Prooveedor.destroy({ where: { proveedor_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Proveedor not found' });
      res.status(200).json({ message: 'Proveedor deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ProoveedorController;
