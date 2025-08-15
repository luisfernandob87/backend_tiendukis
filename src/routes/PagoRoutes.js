const express = require('express');
const PagoController = require('../controllers/PagoController');
const validatePago = require('../middlewares/validatePago');

const router = express.Router();

router.post('/', validatePago, PagoController.create);
router.get('/', PagoController.getAll);
router.get('/:id', PagoController.getById);
router.put('/:id', validatePago, PagoController.update);
router.delete('/:id', PagoController.delete);

module.exports = router;
