const router = require("express").Router();
const { topikController } = require("../controllers/index");

// router.post("/", provinsiController.createProvinsi);
router.get("/:permalink", topikController.getByPermalink);
// router.put("/:id", provinsiController.updateProvinsi);
// router.delete("/:id", provinsiController.deleteProvinsi);

module.exports = router;
