const { Router } = require("express");
const pubController = require("../../controllers/Pub");
const imageUpload = require("../../middlewares/imageUpload");
const router = Router();

router.post("/create", imageUpload.single("image"), pubController.createPub);
router.get("/", pubController.getAllPubs);
router.get("/:id", pubController.getPubById);
router.put("/:id", imageUpload.single("image"), pubController.updatePub);
router.delete("/:id", pubController.deletePub);

module.exports = router;
