const { Router } = require("express");
const NewsletterController = require("../../controllers/NewsletterController.js");
const router = Router();
const authMiddleware = require("../../middlewares/AuthCheck");

router.get("/", NewsletterController.getAllNewsletters);
router.post("/", NewsletterController.createNewsletter);
router.get("/count", NewsletterController.getAllNewslettersCount);
router.delete("/:id", NewsletterController.deleteNewsletter);
module.exports = router;
