const router = require("express").Router();
const { geoController } = require("../controllers/index");

router.get("/", geoController.getAllGeo);
router.get("/:permalink", geoController.getByPermalink);

module.exports = router;