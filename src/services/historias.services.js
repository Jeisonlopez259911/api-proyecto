const Histirias = require('../models/historias.models');

const crearHistorias = async (data) => {
    return await Histirias.create(data);
};

const listarHistorias = async () => {
    return await Histirias.findAll();
};

const listarHistoriasPorId= async (id) => {
    return await Histirias.findByPk(id);
};

const actualizarHistorias = async (id, data) => {
    const historia = await Histirias.findByPk(id);
    if (!historia) {
        return null;
    }
    await historia.update(data);
    return historia;
};

const eliminarHistorias = async (id) => {
    const historia = await Histirias.findByPk(id);
    if (!historia) {
        return null;
    }
    await historia.destroy();
    return historia;
};

module.exports = {
    crearHistorias,
    listarHistorias,
    listarHistoriasPorId,
    actualizarHistorias,
    eliminarHistorias
};