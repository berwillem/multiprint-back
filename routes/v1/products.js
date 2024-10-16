const { Router } = require("express");
const ProductController = require("../../controllers/productController");
const imageUpload = require("../../middlewares/imageUpload");
const router = Router();

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get all products
 *     description: Fetch a list of all products.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/models/Product'
 *       500:
 *         description: Server error.
 */
router.get("/", ProductController.getAllProducts);

/**
 * @swagger
 * /api/v1/products:
 *   post:
 *     summary: Create a new product
 *     description: Upload images and create a new product.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titlefr:
 *                 type: string
 *               titleen:
 *                 type: string
 *               titlear:
 *                 type: string
 *               descfr:
 *                 type: string
 *               descen:
 *                 type: string
 *               descar:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product created successfully.
 *       500:
 *         description: Server error.
 */
router.post(
  "/",
  imageUpload.array("images", 3),
  ProductController.createProduct
);

/**
 * @swagger
 * /api/v1/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Delete a product by its ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Server error.
 */
router.delete("/:id", ProductController.deleteProduct);

/**
 * @swagger
 * /api/v1/products/{id}:
 *   put:
 *     summary: Update a product
 *     description: Upload new images and update a product by its ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titlefr:
 *                 type: string
 *               titleen:
 *                 type: string
 *               titlear:
 *                 type: string
 *               descfr:
 *                 type: string
 *               descen:
 *                 type: string
 *               descar:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Server error.
 */
router.put(
  "/:id",
  imageUpload.array("images", 3),
  ProductController.updateProduct
);

module.exports = router;
