const update = require("../models/Update");

exports.update = (req, res) => {
  const id = req.params.id;
  const { descricao, valor } = req.body;
  update.sql(
    "UPDATE gastos SET descricao = ?, valor = ?, dataOperacao = NOW() WHERE id = ?",
    [descricao, valor, id],
    res,
  );
};
