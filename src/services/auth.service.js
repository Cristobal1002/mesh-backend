import { model } from "../models/main.models.js"
import bcrypt  from 'bcryptjs'
import {  CustomError } from "../errors/main.error.js"
import { jwt } from "../utils/main.utils.js"

export const createUser = async (data) => {
    const { password, ...user} = data
    try {
        const encryptPassword = await bcrypt.hash(password, 9)
        user.password = encryptPassword
        const register = await model.UserModel.create(user)
        return {data: register, error:null, warning:null}
    } catch (e) {
        console.log('Aqui el error',e.parent.detail)
        throw  CustomError ({message: `Error al crear el usuario`, code:500, data: e.errors})
    }
}

export const login = async (data) => {
    const {email, password} = data
    try {
        const usr = await model.UserModel.findOne({where: {email}})
        const valHash = await bcrypt.compare(password, usr.password)
        if(!usr || !valHash) return {error: `Email or Password invalid`}
        else { 
            const signToken = await jwt.getToken(usr.id)
            return {data: {user: usr, token: signToken}, error: null, warning: null}
         }
    } catch (error) {
        console.log('error en login',error)
        throw CustomError({message:'error', code: 500, data:error.data})
    }
}