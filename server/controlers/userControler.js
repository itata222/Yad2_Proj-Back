const User = require('../models/userModel');


exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        if (!user) {
            throw new Error('no user added')
        }
        await user.save();
        res.send(user)
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findUserbyEmailAndPassword(email, password);
        const token = await user.generateAuthToken();
        res.send({ user, token })
    } catch (e) {
        res.status(500).send({
            status: 500,
            message: e.message,
        })
    }
}

exports.logout = async (req, res) => {
    const user = req.user;
    try {
        user.tokens = user.tokens.filter((tokenDoc) => tokenDoc.token !== req.token)
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(500).send({
            status: 500,
            message: 'something went wrong'
        })
    }
}
