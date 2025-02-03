const User = require("../models/userModel.js")


const addSignup = async (req, res) => {
    try {
        const { username, email, password, dateOfBirth } = req.body
        if (username == null || email == null || password == null || dateOfBirth == null) {
            return res.status(400).send("Field shouldn't be empty!")
        }

        if (password.length > 16 || password.length < 8) {
            return res.status(400).send("Password should be between 8 to 16 characters")
        }

        const newUser = new User ({
            username,
            email,
            password,
            dateOfBirth

        })

        await newUser.save()

        res.status(201).send("profile created")


    } catch (err) {
        res.status(500).send(err.message)
    }

}

module.exports = addSignup