const express = require('express');
const TiendaController = require('../controllers/TiendaController');
const validateTienda = require('../middlewares/validateTienda');

const router = express.Router();

router.post('/', validateTienda, TiendaController.create);
router.get('/', TiendaController.getAll);
router.get('/:id', TiendaController.getById);
router.put('/:id', validateTienda, TiendaController.update);
router.delete('/:id', TiendaController.delete);

module.exports = router;
