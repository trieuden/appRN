require('dotenv').config();
const express = require('express'); //commonjs
const mysql = require('mysql')
const cors = require('cors');
const apiRouter = require('./src/router/api')


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

app.use(cors({
  origin: 'exp://10.10.0.217:19000',
}));

app.use('/', apiRouter);


app.listen(port, '10.10.0.217', () => {
  console.log("Connection..." + port)
});

