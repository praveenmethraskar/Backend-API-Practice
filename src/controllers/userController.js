import UserModel from "../repository/userRepository.js"

// 1. Create a user
export const createUser = async (req, res) => {
    try {
        const { firstname, lastname, exam, address } = req.body
        const user = new UserModel({ firstname, lastname, exam, address })
        await user.save()

        const userResponse = {
            firstname: user.firstname,
            lastname: user.lastname,
            exam: user.exam,
            address: user.address
        }

        res.status(201).json({ message: "User saved successfully", user: userResponse })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// 2. Get count by exam
export const getCountByExam = async (req, res) => {
    try {
        const examName = req.params.exam
        const count = await UserModel.countDocuments({ exam: examName })
        res.json({ exam: examName, count })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// 3. Get users by date
export const getExamsByDate = async (req, res) => {
    try {
        const date = new Date(req.params.date)
        const nextDate = new Date(date)
        nextDate.setDate(nextDate.getDate() + 1)

        const exams = await UserModel.find(
            { createdAt: { $gte: date, $lt: nextDate } },
            { _id: 0, createdAt: 0, __v: 0 }
        ).lean()

        res.json({ date: req.params.date, exams, total: exams.length })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}