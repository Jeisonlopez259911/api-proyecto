const Usuarios = require('../models/usuarios.models');

const crearUsuario = async (data) => {
    return await Usuarios.create(data);
};

const listarUsuarios = async () => {
    return await Usuarios.findAll();
};

const listarUsuariosPorId = async (id) => {
    return await Usuarios.findByPk(id);
};

const actualizarUsuarios = async (id, data) => {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
        return null;
    }
    await usuario.update(data);
    return usuario;
};

const eliminarUsuarios = async (id) => {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
        return null;
    }
    await usuario.destroy();
    return true;
};

module.exports = {
    crearUsuario,
    listarUsuarios,
    listarUsuariosPorId,
    actualizarUsuarios,
    eliminarUsuarios
};