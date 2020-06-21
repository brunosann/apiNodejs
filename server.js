require("dotenv").config({ path: "variables.env" });
const express = require("express");
const router = require("./src/routes/routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use(express.static("public"));

app.listen(process.env.PORT, () => {
  console.log("Server run port: " + process.env.PORT);
});
