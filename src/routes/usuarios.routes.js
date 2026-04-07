const sequelize = require('express');
const router = sequelize.Router();
const usuariosControllers = require('../controllers/usuarios.controllers');

router.post('/usuarios', usuariosControllers.crear);
router.get('/usuarios', usuariosControllers.listar);
router.get('/usuarios/:id', usuariosControllers.listarPorId);
router.put('/usuarios/:id', usuariosControllers.actualizar);
router.delete('/usuarios/:id', usuariosControllers.eliminar);

module.exports = router;