const router = require("express").Router();
const { industriController } = require("../controllers/index");

// router.post("/", provinsiController.createProvinsi);
router.get("/:permalink", industriController.getByPermalink);
// router.put("/:id", provinsiController.updateProvinsi);
// router.delete("/:id", provinsiController.deleteProvinsi);

module.exports = router;