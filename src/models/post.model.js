import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/main.database.js'

class PostModel extends Model {}

PostModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    body: {
        type: DataTypes.STRING,
        allowNull: true
    },
    scope:{
        type: DataTypes.STRING,
        defaultValue: 'public'
    },
    media: {
        type: DataTypes.JSONB,
        allowNull: true 
    }
},{
    sequelize,
    modelName: 'PostModel',
    tableName: 'post',
    paranoid: true,
    timestamps: true,
    defaultScope: {
        attributes: { exclude: ["createdAt", "deletedAt", "updatedAt"] },
    },

})

export default PostModel