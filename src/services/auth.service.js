import { model } from "../models/main.models.js"
import bcrypt  from 'bcryptjs'
import {  CustomError } from "../errors/main.error.js"

export const createUser = async (data) => {
    const { password, ...user} = data
    try {
        if(!password) throw CustomError({message: `No hay password`, code:400, data: {}})
        const encryptPassword = await bcrypt.hash(password, 9)
        user.password = encryptPassword
        const register = await model.UserModel.create(user)
        return register
    } catch (e) {
        console.log('Aqui el error',e.parent.detail)
        throw  CustomError ({message: `Error al crear el usuario`, code:500, data: e.errors})
    }
}