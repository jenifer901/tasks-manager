import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/user', authRoutes)
app.use('/api/tasks', tasksRoutes)

const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`MOCK API on port ${PORT}`)
})

