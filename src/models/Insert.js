const mysql = require("mysql");

exports.sql = async (sqlQuery, val, res) => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
  });
  await connection.query(
    {
      sql: sqlQuery,
      values: val,
    },
    (err, results, fields) => {
      if (err) res.json(err);
      else res.json(results.insertId);
      connection.end();
    },
  );
};
