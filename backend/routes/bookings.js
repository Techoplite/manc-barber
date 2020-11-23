const router = require('express').Router();
let Booking = require('../models/booking.model');

router.route('/').get((req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const timeSlot = req.body.timeSlot

    const newBooking = new Booking({ firstName, lastName, timeSlot });

    newBooking.save()
        .then(() => res.json('Booking added!'))
        .catch(err => res.status(400).json('Error test: ' + err));
});

module.exports = router;