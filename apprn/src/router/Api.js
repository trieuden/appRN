const express = require("express");
const router = express.Router();
const connection = require('../config/database')

router.get("/api/user",(req, res) => {
    const query = 'SELECT * FROM user'; 
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error(error);
      } else {
        res.json(results); 
      }
    });
  })

module.exports = router

