import type { Request, Response } from "express";
const express = require("express");
const cors = require("cors");
const API = express();
const router = express.Router();
const PORT = 3000;

API.use(cors());
API.use(express.json());
API.use(router);

API.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

router.get("/", (req: Request, res: Response) => {
  res.send("sucess");
});

router.post("/post", (req: Request, res: Response) => {
  if (!req.body) res.sendStatus(400);
  else res.json(req.body);
});
