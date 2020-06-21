const express = require("express");
const homeController = require("../controllers/homeController");
const getController = require("../controllers/getController");
const postController = require("../controllers/postController");
const updateController = require("../controllers/updateController");
const deleteController = require("../controllers/deleteController");

const router = express.Router();

router.get("/", homeController.home);
router.get("/:id", getController.show);
router.post("/post", postController.add);
router.put("/update/:id", updateController.update);
router.delete("/delete/:id", deleteController.del);

module.exports = router;
