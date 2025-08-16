const { Propietario } = require('../models');
const bcrypt = require('bcryptjs');

const PropietarioController = {
  async create(req, res) {
    try {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      const propietario = await Propietario.create(req.body);
      res.status(201).json(propietario);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ error: 'Correo ya existe' });
      }
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const propietarios = await Propietario.findAll();
      res.status(200).json(propietarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const propietario = await Propietario.findByPk(req.params.id);
      if (!propietario) return res.status(404).json({ error: 'Propietario not found' });
      res.status(200).json(propietario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Propietario.update(req.body, {
        where: { propietario_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Propietario not found' });
      res.status(200).json({ message: 'Propietario updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Propietario.destroy({ where: { propietario_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Propietario not found' });
      res.status(200).json({ message: 'Propietario deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = PropietarioController;
