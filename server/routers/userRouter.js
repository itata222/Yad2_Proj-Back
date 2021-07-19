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


module.exports = router;