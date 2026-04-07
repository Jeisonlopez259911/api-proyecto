const usuariosServices = require('../services/usuarios.services');

const crear = async (req, res) => {
    try {
        const Usuario = await usuariosServices.crearUsuario(req.body);
        res.status(201).json(Usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listar = async (req, res) => {
    const Usuarios = await usuariosServices.listarUsuarios();
    res.json(Usuarios);
};

const listarPorId = async (req, res) => {
    try{    
        const { id } = req.params;
        const Usuario = await usuariosServices.listarUsuariosPorId(id);
        if (!Usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(Usuario);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const UsuarioActualizado = await usuariosServices.actualizarUsuarios(id, req.body);
        if (!UsuarioActualizado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(UsuarioActualizado);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminado = await usuariosServices.eliminarUsuarios(id);
        if (!eliminado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

};

module.exports = {
    crear,
    listar,
    listarPorId,
    actualizar,
    eliminar
};