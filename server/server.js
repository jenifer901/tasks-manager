import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import columnsRoutes from './routes/columns.routes.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/user', authRoutes)
app.use('/api/tasks', tasksRoutes)
app.use('/api/columns', columnsRoutes)

const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`MOCK API on port ${PORT}`)
})

