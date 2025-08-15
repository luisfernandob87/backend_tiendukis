const express = require('express');
const MovimientoController = require('../controllers/MovimientoController');
const validateMovimiento = require('../middlewares/validateMovimiento');

const router = express.Router();

router.post('/', validateMovimiento, MovimientoController.create);
router.get('/', MovimientoController.getAll);
router.get('/:id', MovimientoController.getById);
router.put('/:id', validateMovimiento, MovimientoController.update);
router.delete('/:id', MovimientoController.delete);

module.exports = router;
