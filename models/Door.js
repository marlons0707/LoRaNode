const mongoose = require('mongoose');

const DoorSchema = mongoose.Schema({
    ALARM: String,
    DOOR_OPEN_STATUS: String,
    DOOR_OPEN_TIMES: Number,
    LAST_DOOR_OPEN_DURATION: Number,
    TIME: String,
}, { versionKey:false });

module.exports = mongoose.model('door-actions', DoorSchema);