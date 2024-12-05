const router = require("express").Router();
const { topikController } = require("../controllers/index");

// router.post("/", provinsiController.createProvinsi);
router.get("/", topikController.getAllTopik);
router.get("/:permalink", topikController.getByPermalink);

module.exports = router;
