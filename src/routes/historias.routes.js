const express = require('express');
const router = express.Router();
const historiasControllers = require('../controllers/historias.controllers');

router.post('/usuarios', historiasControllers.crear);
router.get('/usuarios', historiasControllers.listar);
router.get('/usuarios/:id', historiasControllers.listarPorId);
router.put('/usuarios/:id', historiasControllers.actualizar);
router.delete('/usuarios/:id', historiasControllers.eliminar);

module.exports = router;