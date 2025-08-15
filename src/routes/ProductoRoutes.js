const express = require('express');
const ProductoController = require('../controllers/ProductoController');
const validateProducto = require('../middlewares/validateProducto');

const router = express.Router();

router.post('/', validateProducto, ProductoController.create);
router.get('/', ProductoController.getAll);
router.get('/:id', ProductoController.getById);
router.put('/:id', validateProducto, ProductoController.update);
router.delete('/:id', ProductoController.delete);

module.exports = router;
