const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://user:pass@cluster0.umdjx.mongodb.net/', {useNewUrlParser:true, useUnifiedTopology: true });
const express = require('express');

const app = express();
app.use(express.static('public'));app.use((req, res, next) => {    res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");   
   next();});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public/generated-docs`));


const Device = require('./models/device');
/** 
  * @api {get} /api/devices AllDevices An array of all devices
  *  @apiGroup Device
  * @apiSuccessExample {json} Success-Response:
  *  [
  *       {   "_id": "dsohsdohsdofhsofhosfhsofh",
  *           "name": "Mary's iPhone",
  *           "user": "mary",
  *            "sensorData":[
  *             {       
  *              "ts": "1529542230",   
  *               "temp": 12,*      
  *               "loc": { 
  *                 "lat": -37.84674,
  *                 "lon": 145.115113*        
  *             }
  *       },    
  *       {   
  *               "ts": "1529572230",
  *               "temp": 17,
  *               "loc": {
  *                  "lat": -37.850026,
  *                  "lon": 145.117683      
  *             }
  *       }
  *            "id": 2,
  *            "name": "Sam's iPhone",
  *            "user": "sam",
  *            "sensorData": [
  *             {
  *              "ts": "1529572230",
  *               "temp": 14,
  *                "loc": {
  *                   "lat": -37.850026,
  *                   "lon": 145.117683
  *                  }
  *              }
  *       {
  *                "id":4
  *               "name": "Bob's Samsung Galaxy",
  *               "user": "bob",
  *               "sensorData": [
  *              {
  *                "ts": "1529545935",
  *                 "temp": 14,
  *                 "loc": {
  *                    "lat": -37.839587,
  *                    "lon": 145.101386
  *              }
  *        }
  * 
  *       }
  *       ] 
  *   }
  * ]
  *  @apiErrorExample {json} Error-Response: 
  *  {
  *     "User does not exist"
  *  }
  */
 app.get('/docs', (req, res) => {  res.sendFile(`${__dirname}/public/generated-docs/index.html`);});
app.get('/api/test', (req, res) =>
 {  res.send('The API is working!');});
 

app.get('/api/devices', (req, res) => {  Device.find({}, (err, devices) => {if (err == true) {return res.send(err);    } else {return res.send(devices);    }  });});
app.get('/docs', (req, res) => {  res.sendFile(`${__dirname}/public/generated-docs/index.html`);});
 app.post('/api/devices', (req, res) => {const { name, user, sensorData } = req.body;
 const newDevice = new Device({    name,    user,    sensorData  }); 
 newDevice.save(err => {return err      ? res.send(err)      : res.send('successfully added device and data');});
 });



 app.listen(port, () => {console.log(`listening on port ${port}`);});       
 
 
