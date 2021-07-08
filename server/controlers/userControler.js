const User = require('../models/userModel');


exports.createUser = async (req, res) => {
    try {
        console.log(req.body)
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

exports.updateInfo = async (req, res) => {
    const _id = req.user.id;
    try {
        if (req.body && (!req.body.password && !req.body.email))
            throw new Error('You can only edit your password or email')
        const user = await User.findById({ _id });
        const newPassword = req.body?.password;
        const newEmail = req.body?.email;
        user.password = newPassword || user.password;
        user.email = newEmail || user.email;
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}
