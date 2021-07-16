const Post = require('../models/postModel');
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
    console.log(7)
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

exports.addPost=async (req, res) => {
    try {
        const post = new Post(req.body);
        const user = await User.findById(req.user._id);
        user.posts = user.posts.concat({ post });
        await user.save();
        await post.save()
        res.send(post)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

exports.getPosts=async (req, res) => {
    try {
        const posts=await Post.find({}).sort({'createdAt': -1}).limit(5)
        if(!posts)  
            throw new Error({
                status:500,
                message:'no posts yet'
            })
        res.send(posts)
    } catch (e) {
        res.status(500).send(e.message);
    }
}


