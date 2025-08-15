const { Plan } = require('../models');

const PlanController = {
  async create(req, res) {
    try {
      const plan = await Plan.create(req.body);
      res.status(201).json(plan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const plans = await Plan.findAll();
      res.status(200).json(plans);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const plan = await Plan.findByPk(req.params.id);
      if (!plan) return res.status(404).json({ error: 'Plan not found' });
      res.status(200).json(plan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Plan.update(req.body, {
        where: { plan_ID: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Plan not found' });
      res.status(200).json({ message: 'Plan updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Plan.destroy({ where: { plan_ID: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Plan not found' });
      res.status(200).json({ message: 'Plan deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = PlanController;
