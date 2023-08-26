import Jwt from "jsonwebtoken";
import { config } from "../config/secrets.js";

const secret = config.jwt

export const getToken = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { app: 'api-backend', u: uid, expire: new Date() }
        Jwt.sign(payload, secret, { expiresIn: '6h' },
            (error, token) => {
                if (error) { reject('Imposibble to get token') } else {
                    resolve(token)
                }
            })
    })
}

export const verifyToken = (token) => {
    try {
        return Jwt.verify(token, secret, (err, decoded) => !err);
    } catch (error) {
        return false;
    }
};