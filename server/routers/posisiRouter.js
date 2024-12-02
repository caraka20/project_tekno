const router = require("express").Router();
const { posisiController } = require("../controllers/index");

// router.post("/", provinsiController.createProvinsi);
router.get("/:permalink", posisiController.getByPermalink);
// router.put("/:id", provinsiController.updateProvinsi);
// router.delete("/:id", provinsiController.deleteProvinsi);

module.exports = router;