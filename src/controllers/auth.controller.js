import { authService } from "../services/main.services.js"


export const login = async (req, res,next) => {
    try {
        res.send({msg:'Login post is fine'})
    } catch (e) {
        console.log(e)
        next(e)
    }
}

export const register = async (req, res, next) => {
    const data = req.body
    try {
        const response = await authService.createUser(data)
        res.json(response)
    } catch (e) {
        console.log(e)
        next(e)
    }
}