const router = require("express").Router();
const { geoController } = require("../controllers/index");

// router.post("/", provinsiController.createProvinsi);
router.get("/:permalink", geoController.getByPermalink);
// router.put("/:id", provinsiController.updateProvinsi);
// router.delete("/:id", provinsiController.deleteProvinsi);

module.exports = router;