const express = require('express');
const UsuarioTiendaController = require('../controllers/UsuarioTiendaController');
const validateUsuarioTienda = require('../middlewares/validateUsuarioTienda');

const router = express.Router();

router.post('/', validateUsuarioTienda, UsuarioTiendaController.create);
router.get('/', UsuarioTiendaController.getAll);
router.get('/:id', UsuarioTiendaController.getById);
router.put('/:id', validateUsuarioTienda, UsuarioTiendaController.update);
router.delete('/:id', UsuarioTiendaController.delete);

module.exports = router;
