const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Historias = sequelize.define('Historias', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    portadaURL:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    estado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    clasificacionEdad:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_vistas:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    usuariosID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }, onDelete: 'CASCADE'
    },
},{
    tableName: 'historias',
    timestamps: true,
    createdAt: 'fecha_publicacion',
    updatedAt: 'fecha_actualizacion',

    indexes: [
        {
            unique: true,
            fields: ['titulo', 'usuariosID']
        }
    ]
});

module.exports = Historias;