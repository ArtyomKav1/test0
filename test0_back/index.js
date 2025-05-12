import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 3000
app.use(cors({
    origin: ['http://212.23.211.54:8082', 'http://localhost:8082'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.options('/api', cors())
app.get('/api', async (req, res) => {
    console.log("успех")
    res.status(200).json({ message: "Success" })
})
app.post('/api', async (req, res) => {
    try {
        if (!req.body || !req.body.name) {
            return res.status(400).json({
                success: false,
                message: 'Name is required'
            })
        }

        console.log(`Thank you for your interest, ${req.body.name}`)
        res.status(200).json({
            success: true,
            message: 'Форма успешно отправлена'
        });
    } catch (error) {
        console.error("Error:", error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})