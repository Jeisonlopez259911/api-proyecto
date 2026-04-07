const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Usuarios = sequelize.define('Usuarios', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_registro:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    biografia:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    avartarURL:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nacimiento:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    tipo_cuenta:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ultima_conexion:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }

},{
    tableName: 'usuarios',
    timestamps: true,
});

module.exports = Usuarios;