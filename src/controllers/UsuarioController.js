const { Usuario } = require('../models');

const UsuarioController = {
  async create(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'Usuario not found' });
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Usuario.update(req.body, {
        where: { usuario_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Usuario not found' });
      res.status(200).json({ message: 'Usuario updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Usuario.destroy({ where: { usuario_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Usuario not found' });
      res.status(200).json({ message: 'Usuario deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UsuarioController;
