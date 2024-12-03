const { Router } = require("express");
const NewsletterController = require("../../controllers/NewsletterController.js");
const router = Router();
const authMiddleware = require("../../middlewares/AuthCheck");

router.get("/",authMiddleware, NewsletterController.getAllNewsletters);
router.post("/", NewsletterController.createNewsletter);
router.get("/count",authMiddleware, NewsletterController.getAllNewslettersCount);
router.delete("/:id",authMiddleware, NewsletterController.deleteNewsletter);
module.exports = router;
