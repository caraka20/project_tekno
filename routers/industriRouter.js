const router = require("express").Router();
const { industriController } = require("../controllers/index");
const { apiKey } = require("../middleware/apiKey");

router.get("/:permalink", apiKey, industriController.getByPermalink);
module.exports = router;
