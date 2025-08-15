const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const validateUsuario = require('../middlewares/validateUsuario');

const router = express.Router();

router.post('/', validateUsuario, UsuarioController.create);
router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.put('/:id', validateUsuario, UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

module.exports = router;
