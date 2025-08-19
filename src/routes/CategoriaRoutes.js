const express = require('express');
const CategoriaController = require('../controllers/CategoriaController');
const validateCategoria = require('../middlewares/validateCategoria');

const router = express.Router();

router.post('/', validateCategoria, CategoriaController.create);
router.get('/', CategoriaController.getAll);
router.get('/:id', CategoriaController.getById);
router.put('/:id', validateCategoria, CategoriaController.update);
router.delete('/:id', CategoriaController.delete);

module.exports = router;
