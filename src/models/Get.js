const mysql = require("mysql");

exports.sql = async (sqlQuery, val, res) => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
  });
  await connection.query(sqlQuery, val, (err, results, fields) => {
    if (err) res.json(err);
    else
      results.length === 0
        ? res.json({ erro: "usuario inexisteste" })
        : res.json(results);
    connection.end();
  });
};
