const express = require('express');
const PlanController = require('../controllers/PlanController');
const validatePlan = require('../middlewares/validatePlan');

const router = express.Router();

router.post('/', validatePlan, PlanController.create);
router.get('/', PlanController.getAll);
router.get('/:id', PlanController.getById);
router.put('/:id', validatePlan, PlanController.update);
router.delete('/:id', PlanController.delete);

module.exports = router;
