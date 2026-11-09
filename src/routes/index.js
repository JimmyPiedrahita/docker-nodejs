import { Router } from "express";
import generator from "../utils/hashGenerator.js";

const router = Router();

router.get("/:word", (req, res) => {
  const { word } = req.params;
  let hash = [];
  hash.push({ Hash: generator(word) });
  res.json(hash);
});

export default router;