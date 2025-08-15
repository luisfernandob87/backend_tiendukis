const express = require('express');
const PropietarioController = require('../controllers/PropietarioController');
const validatePropietario = require('../middlewares/validatePropietario');

const router = express.Router();

router.post('/', validatePropietario, PropietarioController.create);
router.get('/', PropietarioController.getAll);
router.get('/:id', PropietarioController.getById);
router.put('/:id', validatePropietario, PropietarioController.update);
router.delete('/:id', PropietarioController.delete);

module.exports = router;
