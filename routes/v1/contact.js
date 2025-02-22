const { Router } = require("express");

const ContactController = require("../../controllers/ContactController");
const authMiddleware = require("../../middlewares/AuthCheck");

const router = Router();

/**
 * @swagger
 * /api/v1/contact:
 *   get:
 *     summary: Get all contacts
 *     description: Fetch a list of all contacts.
 *     tags:
 *       - Contacts
 */
router.get("/",authMiddleware, ContactController.getAllContacts);

/**
 * @swagger
 * /api/v1/contact:
 *   post:
 *     summary: Create a new contact
 *     description: Create a new contact in the system.
 *     tags:
 *       - Contacts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", ContactController.createContact);

/**
 * @swagger
 * /api/v1/contact/{id}:
 *   delete:
 *     summary: Delete a contact
 *     description: Delete a contact by its ID.
 *     tags:
 *       - Contacts
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The contact ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       404:
 *         description: Contact not found
 */
router.delete("/:id",authMiddleware, ContactController.deleteContact);

module.exports = router;
