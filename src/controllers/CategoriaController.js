const { Categoria } = require('../models');

const CategoriaController = {
  async create(req, res) {
    try {
      const Categoria = await Categoria.create(req.body);
      res.status(201).json(Categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const categorias = await Categoria.findAll();
      res.status(200).json(categorias );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (!categoria) return res.status(404).json({ error: 'categoria not found' });
      res.status(200).json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Categoria.update(req.body, {
        where: { categoria_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Categoria not found' });
      res.status(200).json({ message: 'Categoria updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Categoria.destroy({ where: { categoria_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Categoria not found' });
      res.status(200).json({ message: 'Categoria deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = CategoriaController;
