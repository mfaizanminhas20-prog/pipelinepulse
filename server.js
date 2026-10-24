const express = require("express");
const path = require("path");
const app = express();

const EMBED_TOKEN = "emb_JhBqJ37apc407Qvr9UvI-ziZHcpr_mxEz3F0yWV1fSA";

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.get("/api/fastn-token", (req, res) => {
  res.json({ token: EMBED_TOKEN });
});

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});