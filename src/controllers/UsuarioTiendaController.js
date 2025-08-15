const { UsuarioTienda } = require('../models');

const UsuarioTiendaController = {
  async create(req, res) {
    try {
      const usuarioTienda = await UsuarioTienda.create(req.body);
      res.status(201).json(usuarioTienda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const usuariosTiendas = await UsuarioTienda.findAll();
      res.status(200).json(usuariosTiendas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const usuarioTienda = await UsuarioTienda.findByPk(req.params.id);
      if (!usuarioTienda) return res.status(404).json({ error: 'UsuarioTienda not found' });
      res.status(200).json(usuarioTienda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await UsuarioTienda.update(req.body, {
        where: { usuarioTienda_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'UsuarioTienda not found' });
      res.status(200).json({ message: 'UsuarioTienda updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await UsuarioTienda.destroy({ where: { usuarioTienda_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'UsuarioTienda not found' });
      res.status(200).json({ message: 'UsuarioTienda deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UsuarioTiendaController;
