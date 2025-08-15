const { Movimiento } = require('../models');

const MovimientoController = {
  async create(req, res) {
    try {
      const movimiento = await Movimiento.create(req.body);
      res.status(201).json(movimiento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const movimientos = await Movimiento.findAll();
      res.status(200).json(movimientos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const movimiento = await Movimiento.findByPk(req.params.id);
      if (!movimiento) return res.status(404).json({ error: 'Movimiento not found' });
      res.status(200).json(movimiento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Movimiento.update(req.body, {
        where: { movimiento_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Movimiento not found' });
      res.status(200).json({ message: 'Movimiento updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Movimiento.destroy({ where: { movimiento_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Movimiento not found' });
      res.status(200).json({ message: 'Movimiento deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = MovimientoController;
