import UserModel from "../repository/userRepository.js"

// Create a user
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
        console.log("Response JSON:", JSON.stringify(userResponse, null, 2))
        res.status(201).json({ message: "User saved successfully", user: userResponse })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// Count users by exam
export const getCountByExam = async (req, res) => {
    try {
        const examName = req.params.exam
        const count = await UserModel.countDocuments({ exam: examName })
        const response = { exam: examName, count };

        // Log the response in JSON format in console
        console.log("Response JSON:", JSON.stringify(response, null, 2));
        res.json(response)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// Get users by date
export const getExamsByDate = async (req, res) => {
    try {
        const date = new Date(req.params.date)
        const nextDate = new Date(date)
        nextDate.setDate(nextDate.getDate() + 1)

        const exams = await UserModel.find(
            { createdAt: { $gte: date, $lt: nextDate } },
            { _id: 0, createdAt: 0, __v: 0 }
        ).lean()
        console.log("Response JSON:", JSON.stringify(exams, null, 2))
        res.json({ date: req.params.date, exams, total: exams.length })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}