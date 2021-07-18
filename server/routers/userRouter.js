const express = require('express');
const auth = require('../middlewares/auth')
const { createUser, loginUser, logout, updateInfo, addPost, getPosts, userPosts } = require('../controlers/userControler');

const router = new express.Router();

router.post('/create-user', createUser)

router.post('/login-user', loginUser)

router.post('/user/logout-user', auth, logout)

router.patch('/user/update-user', auth, updateInfo)

router.post('/user/add-post', auth, addPost)

router.get('/get-posts', getPosts)

router.get('/user/my-posts',auth,userPosts)

router.patch('/admin/edit-show', auth, async (req, res) => {
    // const _id = req.query.id;
    // const updatedShow = req.body.updatedShow
    // try {
    //     const show = await Show.findByIdAndUpdate(_id, { ...updatedShow }, {
    //         runValidators: true,
    //         new: true
    //     });
    //     await show.save();
    //     res.send(show);
    // } catch (err) {
    //     res.status(500).send({
    //         status: 500,
    //         message: err.message
    //     })
    // }
})


module.exports = router;