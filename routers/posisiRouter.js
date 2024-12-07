const router = require("express").Router();
const { posisiController } = require("../controllers/index");

router.get("/:permalink", posisiController.getByPermalink);

module.exports = router;
