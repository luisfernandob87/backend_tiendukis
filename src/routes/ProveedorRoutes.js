const express = require('express');
const ProveedorController = require('../controllers/ProveedorController');
const validateProveedor = require('../middlewares/validateProveedor');

const router = express.Router();

router.post('/', validateProveedor, ProveedorController.create);
router.get('/', ProveedorController.getAll);
router.get('/:id', ProveedorController.getById);
router.put('/:id', validateProveedor, ProveedorController.update);
router.delete('/:id', ProveedorController.delete);

module.exports = router;
