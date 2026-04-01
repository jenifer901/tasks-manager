import express from 'express'
import { users } from '../database.js'

const authRoutes = express.Router()


// LOGIN
authRoutes.post('/login', (req,res) => {
    const { email, password } = req.body
    const user = users.find(u =>
        u.email === email && u.password === password
    )

    if(!user){
        return res.status(401).json({
            message: "Invalid credential"
        })
    }

    res.json({
        accessToken: "fake-jwt-token",
        refreshToken: "fake-refresh-token",
        user
    })
})

//GET ALL USERS

export default authRoutes