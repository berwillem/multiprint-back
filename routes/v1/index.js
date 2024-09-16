const { Router } = require("express");

const router = Router();


/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Get all categories
 *     description: Fetch a list of all categories.
 *     tags:
 *       - Categories
 */
router.use("/categories", require("./categories"));



/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get all products
 *     description: Fetch a list of all products.
 *     tags:
 *       - Products
 */
router.use("/products", require("./products"));

module.exports = router;
