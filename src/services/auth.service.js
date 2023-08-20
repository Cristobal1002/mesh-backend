import { model } from "../models/main.models.js"

export const createUser = async (data) => {
    try {
        const register = await model.UserModel.create(data)
        return register
    } catch (e) {
        console.log(e)
    }
}