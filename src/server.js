import express from 'express';
import { routes } from './routes/main.routes.js';
import { syncDb } from './models/main.models.js';

export default async () => {
    const port = process.env.SERVER_PORT

    const app = express()
    app.use(express.json({ limit: '20mb' }))
    app.use(express.urlencoded({ extended: true, limit: '20mb' }))

    syncDb().then(() => console.log('Tablas sincronizadas'))
    routes(app)
    app.listen(port, () => {
        console.log('server running in:', port)
    })


}
