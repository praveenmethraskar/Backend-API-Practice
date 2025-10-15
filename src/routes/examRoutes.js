import express from "express"
import { createUser, getCountByExam, getExamsByDate } from "../controllers/userController.js"

const router = express.Router()

router.post("/", createUser)
router.get("/count-by-exam/:exam", getCountByExam)
router.get("/by-date/:date", getExamsByDate)

export default router