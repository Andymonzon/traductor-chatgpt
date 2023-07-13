import express from 'express'
import morgan from 'morgan'
import translateRoutes from './routes/translate.routes.ts'
import cors from 'cors'

export const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.use('/api', translateRoutes)