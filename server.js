import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/db.js"
import examRoutes from "./src/routes/examRoutes.js"

dotenv.config()

const app = express()
app.use(express.json())

connectDB()

app.use("/api/exams", examRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
