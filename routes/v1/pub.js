const { Router } = require("express");
const pubController = require("../../controllers/Pub");
const imageUpload = require("../../middlewares/imageUpload");
const authMiddleware = require("../../middlewares/AuthCheck");
const router = Router();

/**
 * @swagger
 * /api/v1/pubs:
 *   get:
 *     summary: Get all pubs
 *     description: Fetch a list of all pubs.
 *     tags:
 *       - Pubs
 *     responses:
 *       200:
 *         description: A list of pubs.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pubs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/models/Pub'
 *       500:
 *         description: Server error.
 */
router.get("/", pubController.getAllPubs);

/**
 * @swagger
 * /api/v1/pubs:
 *   post:
 *     summary: Create a new pub
 *     description: Upload an image and create a new pub.
 *     tags:
 *       - Pubs
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
 *               descriptionfr:
 *                 type: string
 *               descriptionen:
 *                 type: string
 *               descriptionar:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               color:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pub created successfully.
 *       500:
 *         description: Server error.
 */
router.post("/",authMiddleware, imageUpload.single("image"), pubController.createPub);

/**
 * @swagger
 * /api/v1/pubs/{id}:
 *   get:
 *     summary: Get a pub by ID
 *     description: Fetch a pub by its ID.
 *     tags:
 *       - Pubs
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The pub ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pub fetched successfully.
 *       404:
 *         description: Pub not found.
 *       500:
 *         description: Server error.
 */
router.get("/:id", pubController.getPubById);

/**
 * @swagger
 * /api/v1/pubs/{id}:
 *   put:
 *     summary: Update a pub
 *     description: Upload a new image and update a pub by its ID.
 *     tags:
 *       - Pubs
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The pub ID
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
 *               descriptionfr:
 *                 type: string
 *               descriptionen:
 *                 type: string
 *               descriptionar:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               color:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pub updated successfully.
 *       404:
 *         description: Pub not found.
 *       500:
 *         description: Server error.
 */
router.put("/:id",authMiddleware, imageUpload.single("image"), pubController.updatePub);

/**
 * @swagger
 * /api/v1/pubs/{id}:
 *   delete:
 *     summary: Delete a pub
 *     description: Delete a pub by its ID.
 *     tags:
 *       - Pubs
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The pub ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pub deleted successfully.
 *       404:
 *         description: Pub not found.
 *       500:
 *         description: Server error.
 */
router.delete("/:id",authMiddleware, pubController.deletePub);

module.exports = router;
