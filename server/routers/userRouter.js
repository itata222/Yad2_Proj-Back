const express = require('express');
const auth = require('../middlewares/auth')
const { createUser, loginUser, logout, updateInfo } = require('../controlers/userControler');

const router = new express.Router();

router.post('/create-user', createUser)

router.post('/login-user', loginUser)

router.post('/logout-user', auth, logout)

router.patch('/update-user', auth, updateInfo)

router.post('/admin/add-cinema', auth, async (req, res) => {
    // try {
    //     const cinema = new Cinema(req.body)
    //     await cinema.save()
    //     res.send(cinema)
    // } catch (e) {
    //     res.status(500).send(e)
    // }
})

router.post('/admin/add-show', auth, async (req, res) => {
    // try {
    //     const show = new Show(req.body.show);
    //     const cinema = await Cinema.findById(req.body.show.cinema._id);
    //     for (let i = 1; i <= req.body.show.cinema.numberOfSeats; i++) {
    //         const seat = new Seat({
    //             number: i,
    //             price: 14,
    //             isTaken: false
    //         });
    //         await seat.save();
    //         show.seats = show.seats.concat({ seat });
    //     }
    //     cinema.shows = cinema.shows.concat({ show });
    //     await cinema.save();
    //     await show.save();
    //     res.send(show)
    // } catch (e) {
    //     res.status(500).send(e.message);
    // }
})

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