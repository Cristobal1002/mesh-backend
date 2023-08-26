import { authService } from "../services/main.services.js"
import { responses }  from "../network/main.network.js"


export const login = async (req, res ,next) => {
    const data = req.body
    try {
        const response = await authService.login(data)
        if(response.data){ responses.success(req, res, response.data)}
        if(response.error){responses.unauthorized(req, res, response.error)}
    } catch (e) {
        console.log(e)
        next(e)
    }
}

export const register = async (req, res, next) => {
    const data = req.body
    try {
        const response = await authService.createUser(data)
        responses.success(req, res, response.data)
    } catch (e) {
        console.log(e)
        next(e)
    }
}

export const test = async (req, res, next) => {
    const data = req.body
    try {
        res.send({msg:'Entro al controlador'})
    } catch (error) {
        next(e)
    }
}
