const mysql = require("mysql");

exports.sql = (sqlQuery, val, res) => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
  });
  connection.query(sqlQuery, val, (err, results, fileds) => {
    if (err) res.json(err);
    else res.json({ results: "Success" });
    connection.end();
  });
};
