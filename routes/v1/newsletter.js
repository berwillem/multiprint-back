const { Router } = require("express");
const NewsletterController = require("../../controllers/NewsletterController.js");
const router = Router();
const authMiddleware = require("../../middlewares/AuthCheck");

router.get("/", NewsletterController.getAllNewsletters);
router.post("/", NewsletterController.createNewsletter);
router.get("/count", NewsletterController.getAllNewslettersCount);
module.exports = router;
