import UserModel from './user.model.js'
import PostModel from './post.model.js'

UserModel.hasMany(PostModel,{foreignKey:{name: 'user_id', allowNull: false}})
PostModel.belongsTo(UserModel,{foreignKey:{name:'user_id', allowNull:false}})


export const syncDb = async () => {
    await UserModel.sync({alter: true, force: true});
    await PostModel.sync({alter: true, force: true});
}

export const model = {
    UserModel,
    PostModel
}



