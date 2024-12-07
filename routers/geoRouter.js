const router = require("express").Router();
const { geoController } = require("../controllers/index");
const { apiKey } = require("../middleware/apiKey");

router.get("/", apiKey, geoController.getAllGeo);
router.get("/:permalink", geoController.getByPermalink);

module.exports = router;
