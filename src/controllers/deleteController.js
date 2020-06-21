const del = require("../models/Delete");

exports.del = (req, res) => {
  const id = req.params.id;
  del.sql("DELETE FROM gastos WHERE id = ?", id, res);
};
