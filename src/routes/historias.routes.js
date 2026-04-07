const express = require('express');
const router = express.Router();
const historiasControllers = require('../controllers/historias.controllers');

router.post('/', historiasControllers.crear);
router.get('/', historiasControllers.listar);
router.get('/:id', historiasControllers.listarPorId);
router.put('/:id', historiasControllers.actualizar);
router.delete('/:id', historiasControllers.eliminar);

module.exports = router;