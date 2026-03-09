const mysql = require('mysql');
const connection = mysql.createConnection({ /* config */ });

// VULNERABLE: Direct string concatenation of user input
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  
  connection.query(query, (err, result) => {
    res.send(result);
  });
});


const mysql = require('mysql');
const connect = mysql.createConnection({ /* config */ });

// VULNERABLE: Direct string concatenation of user input
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  
  connect.query(query, (err, result) => {
    res.send(result);
  });
});