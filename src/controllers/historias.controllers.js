const historiasServices = require('../services/historias.services');

const crear = async (req, res) => {
    try {
        const historia = await historiasServices.crearHistorias(req.body);
        res.status(201).json(historia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listar = async (req, res) => {
    try {
        const historias = await historiasServices.listarHistorias();
        res.status(200).json(historias);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const historia = await historiasServices.listarHistoriasPorId(id);
        if (!historia) {
            return res.status(404).json({ error: 'Historia no encontrada' });
        }
        res.status(200).json(historia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const historiaActualizada = await historiasServices.actualizarHistorias(id, req.body);
        res.status(200).json(historiaActualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminado = await historiasServices.eliminarHistorias(id);
        if (!eliminado) {
            return res.status(404).json({ error: 'Historia no encontrada' });
        }
        res.status(200).json({ message: 'Historia eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    crear,
    listar,
    listarPorId,
    actualizar,
    eliminar
};