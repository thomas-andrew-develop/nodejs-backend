import express from 'express';
import apiRouter from './routers';
import bodyParser from 'body-parser';
import db from './config/database';
require('dotenv').config()

const { PORT } = process.env || 3000;
const app = express();

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    if(req.method === 'OPTIONS'){
      res.sendStatus(200);
    }

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }))

apiRouter(app)




app.listen(PORT, (err, res) => {
  db().then(() => console.log('connected'));
  console.log(PORT)
});
