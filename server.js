const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
import {db} from "./mysql.js"

var db = mysql.createConnection({
  host       : 'localhost',
  user       : 'root',
  password   : 's.ap1ada4',
  database   : 'Tic-Tac-Toe'
});

db.connect((err) => {
  if(err) throw err;
  console.log('MySql Connected...');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const addWinner = `INSERT INTO Winners (player) VALUES ("${req.body.winner}")`;
  db.query(addWinner, function callback(error, selectResult) { if(error) throw error; });
});

app.listen('5000', () => {
  console.log("Server started on port 5000");
});
