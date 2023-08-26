import { jwt } from "../utils/main.utils.js";
import { responses } from "../network/main.network.js";

export const checkToken = (req, res, next) => {
    const token = req.header('x-mesh-token');
    const isValid = jwt.verifyToken(token);
    isValid ? next() : responses.unauthorized(req, res);
};