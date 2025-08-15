const { Tienda } = require('../models');

const TiendaController = {
  async create(req, res) {
    try {
      const tienda = await Tienda.create(req.body);
      res.status(201).json(tienda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const tiendas = await Tienda.findAll();
      res.status(200).json(tiendas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const tienda = await Tienda.findByPk(req.params.id);
      if (!tienda) return res.status(404).json({ error: 'Tienda not found' });
      res.status(200).json(tienda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Tienda.update(req.body, {
        where: { tienda_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Tienda not found' });
      res.status(200).json({ message: 'Tienda updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Tienda.destroy({ where: { tienda_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Tienda not found' });
      res.status(200).json({ message: 'Tienda deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = TiendaController;
