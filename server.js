const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/db.js')
const router = require('./routes/userRoute.js')

app.use(express.json())

app.get("/", (req, res) => {
    try {
        res.status(200).send("Backend is running!")
    } catch (err) {
        res.status(500).send("Internal Server Error!")
    }
})

app.use("/api", router)



const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    try {
        connectDB()
        console.log(`Server is listening on http://localhost:${PORT}`)
    } catch (err) {
        console.error(err.message)
    }

})