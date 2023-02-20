import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createPigment } from "./utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

// serve css as static
app.use(express.static(__dirname));
// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Howdy world!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/", (req, res) => {
  const svg = createPigment(req.body.pigColor);
  res.set("Content-Type", "text/html");
  res.send(svg);
});

export default app;
