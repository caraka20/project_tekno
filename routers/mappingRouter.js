const router = require("express").Router();
const mappingController = require("../controllers/mappingController");

router.get("/", mappingController.getAllMappings);

module.exports = router;
