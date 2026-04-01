import express from 'express'
import { tasks } from '../database.js'

const router = express.Router()

router.get('/', (req,res) => {
    res.json(tasks)
})

router.post('/', (req,res) => {
     const newTask = {
        id: Date.now(),
        ...req.body
     }

     tasks.push(newTask)

    res.json(newTask)
})

export default router