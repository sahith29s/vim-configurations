const userController = async (req, res) => {
    const { name, email, password, pic } = req.body

    res.json({
        name,
        email
    })

}

module.exports = userController