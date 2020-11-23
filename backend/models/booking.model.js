const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    timeSlot: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}
    , {
        timestamps: true,
    }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;