const { Pago } = require('../models');

const PagoController = {
  async create(req, res) {
    try {
      const pago = await Pago.create(req.body);
      res.status(201).json(pago);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const pagos = await Pago.findAll();
      res.status(200).json(pagos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const pago = await Pago.findByPk(req.params.id);
      if (!pago) return res.status(404).json({ error: 'Pago not found' });
      res.status(200).json(pago);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Pago.update(req.body, {
        where: { pago_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Pago not found' });
      res.status(200).json({ message: 'Pago updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Pago.destroy({ where: { pago_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Pago not found' });
      res.status(200).json({ message: 'Pago deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = PagoController;
