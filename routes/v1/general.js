const { Router } = require("express");
const { getEmail, setEmail } = require("../../controllers/generalController");

const router = Router()

router.get("/email", getEmail)
router.post("/email", setEmail)

module.exports = router;