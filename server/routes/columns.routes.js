import express from 'express'
import { columns } from '../database.js'

const router = express.Router()

router.get('/', (req,res) => {
    res.json(columns)
})

router.post('/', (req,res) => {
     const newColumns = {
        id: Date.now(),
        ...req.body
     }

     columns.push(newColumns)

    res.json(newColumns)
})

export default router