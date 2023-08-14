import express from 'express';
import { routes } from './routes.js';


export default async () => {
    const port = process.env.SERVER_PORT
    const version = 'v1'

    const app = express()
    app.use(express.json({ limit: '20mb' }))
    app.use(express.urlencoded({ extended: true, limit: '20mb' }))

    app.use(`/api/${version}`,routes)

    app.listen(port, () => {
        console.log('server running in:', port)
    })
}
