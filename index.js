import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { servePigment } from "./src/utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

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
  const svg = servePigment(req.body.pigColor);
  res.set("Content-Type", "text/html");
  res.send(svg);
});

app.listen(port, () => {
  console.log(`Pigments listening on port ${port}`);
});
