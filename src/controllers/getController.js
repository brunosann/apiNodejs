const get = require("../models/Get");

exports.show = (req, res) => {
  const id = req.params.id;
  get.sql("SELECT * FROM gastos WHERE id = ?", id, res);
};
