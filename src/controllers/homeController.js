const getAll = require("../models/GetAll");

exports.home = (req, res) => {
  getAll.sql("SELECT * FROM gastos", res);
};
