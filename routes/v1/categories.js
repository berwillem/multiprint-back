const { Router } = require("express");
const CategoryController = require("../../controllers/categoryController");
const authMiddleware = require("../../middlewares/AuthCheck");
const router = Router();

/**
 * @swagger
 * /api/v1/categories:
 *   post:
 *     summary: Create a new category
 *     description: Create a new category in the system.
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titlefr:
 *                 type: string
 *               titleen:
 *                 type: string
 *               titlear:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category created successfully.
 *       500:
 *         description: Server error.
 */
router.post("/", CategoryController.createCategory);

/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Get all categories
 *     description: Fetch a list of all categories.
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: List of categories.
 *       500:
 *         description: Server error.
 */
router.get("/", CategoryController.getAllCategories);

/**
 * @swagger
 * /api/v1/categories/{id}:
 *   delete:
 *     summary: Delete a category
 *     description: Delete a category by its ID.
 *     tags:
 *       - Categories
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The category ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category deleted successfully.
 *       404:
 *         description: Category not found.
 *       500:
 *         description: Server error.
 */
router.delete("/:id", authMiddleware, CategoryController.deleteCategory);

/**
 * @swagger
 * /api/v1/categories/{id}:
 *   put:
 *     summary: Update a category
 *     description: Update the details of a category by its ID.
 *     tags:
 *       - Categories
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The category ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titlefr:
 *                 type: string
 *               titleen:
 *                 type: string
 *               titlear:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category updated successfully.
 *       404:
 *         description: Category not found.
 *       500:
 *         description: Server error.
 */
router.put("/:id", authMiddleware, CategoryController.updateCategory);

module.exports = router;
