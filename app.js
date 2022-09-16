const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

var ttn = require('ttn');
const db = require ('./database');

// Middlewares
app.use(cors());
app.use(bodyParser.json())

// Import routes
const postsRoutes = require('./routes/posts');
const temperatureRoutes = require('./routes/temperature');
const doorRoutes = require('./routes/door');

// Routes
app.use('/posts', postsRoutes);
app.use('/temperature', temperatureRoutes);
app.use('/door', doorRoutes);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to Mongo DB');
})



var appEUI = 'umg-sensors@ttn';
var accessKey = 'NNSXS.TD63YSQYX7K3JNMP2T5XTPXREJD3CZ5EVIKP4LA.MBBSVW7DQ6INY3A23G44MYJJTVBY2M7JB3OHEDV4RPQO5VSCALKA';
var client = new ttn.Client('au1.cloud.thethings.network:1883', appEUI, accessKey);

client.on('connect', function () {
    console.log('[DEBUG]', 'Conectado al servidor de TTN');
});

// Escuchando sensores
client.on('uplink-move-sensor', function (msg) {
    console.info('[INFO] ', 'Esuchando el sensor de movimiento');
    db.saveDoorAction(msg.payload.uplink_message.decoded_payload);
});

client.on('uplink-temperature-sensor', function (msg) {
    console.info('[INFO] ', 'Esuchando el sensor de temperatura y humedad');
    db.saveAmbientAction(msg.payload.uplink_message.decoded_payload);
});



// Server
http.listen(3000, () => {
    console.log('Listening http on *:3000');
});


