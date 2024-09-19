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

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     description: Fetch a list of all users.
 *     tags:
 *       - Users
 */
router.use("/users", require("./users"));

/**
 * @swagger
 * /api/v1/pub:
 *   get:
 *     summary: Get all pubs
 *     description: Fetch a list of all pubs.
 *     tags:
 *       - Pubs
 */
router.use("/pub", require("./pub"));

/**
 * @swagger
 * /api/v1/newsletter:
 *   get:
 *     summary: Get all newsletters
 *     description: Fetch a list of all newsletters.
 *     tags:
 *       - Newsletters
 */
router.use("/newsletter", require("./newsletter"));

module.exports = router;
