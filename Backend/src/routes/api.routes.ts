import { Router } from "express";
import {
  apiResponseHandler,
  getChatHistory,
} from "../controllers/api.controller";
import validateToken from "../middlewares/token.validator";

const router = Router();

router.use(validateToken);

/**
 * @swagger
 * /api/chat:
 *   post:
 *     summary: Send a message to the chatbot and receive a response
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello"
 *     responses:
 *       200:
 *         description: Chatbot response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reply:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Unauthorized (invalid or missing token)
 */

/**
 * @swagger
 * /api/chat/history:
 *   get:
 *     summary: Get saved chat history for the logged-in user
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Chat history retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   reply:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: Unauthorized (invalid or missing token)
 */


export const apiRouter = router;
