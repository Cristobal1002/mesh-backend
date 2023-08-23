import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/main.database.js'

class UserModel extends Model { }

UserModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: {
                msg: 'Must be a valid Email'
            }
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    perfil_img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    google: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'UserModel',
    tableName: 'user',
    paranoid: true,
    timestamps: true,
    defaultScope: {
        attributes: { exclude: ["createdAt", "deletedAt", "updatedAt"] },
    },
});


export default UserModel;