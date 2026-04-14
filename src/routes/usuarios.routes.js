const sequelize = require('express');
const router = sequelize.Router();
const usuariosControllers = require('../controllers/usuarios.controllers');

router.post('/', usuariosControllers.crear);
router.get('/', usuariosControllers.listar);
router.get('/:id', usuariosControllers.listarPorId);
router.put('/:id', usuariosControllers.actualizar);
router.delete('/:id', usuariosControllers.eliminar);

module.exports = router;