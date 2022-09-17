const Door = require('./models/Door');
const TempHum = require('./models/Temperature');

// SAVE DOOR ACTION
const saveDoorAction = async (args)=> {
    const door = new Door({
        ALARM: args.ALARM,
        DOOR_OPEN_STATUS: args.DOOR_OPEN_STATUS,
        DOOR_OPEN_TIMES: args.DOOR_OPEN_TIMES,
        LAST_DOOR_OPEN_DURATION: args.LAST_DOOR_OPEN_DURATION,
        TIME: new Date().toLocaleString('es-GT', {timeZone: 'America/Guatemala'})
    });

    await door.save();
}

// SAVE TEMP & HUM MEASURE
const saveAmbientAction = async (args)=> {
    const tempHum = new TempHum({
        BATV: args.BatV,
        BAT_STATUS: args.Bat_status,
        EXT_SENSOR: args.Ext_sensor,
        HUM_SHT: args.Hum_SHT,
        TEMPC_DS: args.TempC_DS,
        TEMPC_SHT: args.TempC_SHT,
        TIME: new Date().toLocaleString('es-GT', {timeZone: 'America/Guatemala'})
    });

    await tempHum.save();
}

exports.saveDoorAction = saveDoorAction;
exports.saveAmbientAction = saveAmbientAction;