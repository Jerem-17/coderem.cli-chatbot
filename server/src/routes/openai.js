import express from "express";
import { getFromOpenAI, postOnOpenAI } from "../controllers/openai.js";
const router = express.Router();

router.get("/", getFromOpenAI);
router.post("/post", postOnOpenAI);

export default router;