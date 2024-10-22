const router = require("express").Router();
const imageController = require("../controller/imageController");


router.post("/", imageController.AddImage);

module.exports = router;