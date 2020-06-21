const insert = require("../models/Insert");

exports.add = (req, res) => {
  const { descricao, valor } = req.body;
  const dateTime = Date.parse(new Date());
  insert.sql(
    "INSERT INTO gastos (descricao, valor, dataOperacao) VALUES (?, ?, ?)",
    [descricao, valor, dateTime],
    res,
  );
};
