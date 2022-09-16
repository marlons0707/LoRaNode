const mongoose = require('mongoose');

const TemperatureSchema = mongoose.Schema({
    BATV: Number,
    BAT_STATUS: Number,
    EXT_SENSOR: String,
    HUM_SHT: Number,
    TEMPC_DS: Number,
    TEMPC_SHT: Number,
    TIME: String,
}, { versionKey:false });

module.exports = mongoose.model('ambient-actions', TemperatureSchema);
