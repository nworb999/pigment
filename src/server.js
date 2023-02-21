import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { createPigment } from "./utils.js";

const rootDir = path.resolve(process.cwd());

export const app = express();

// serve css as static
app.use(express.static(rootDir));
// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Howdy world!");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(rootDir, "index.html"));
});

app.post("/", (req, res) => {
  const svg = createPigment(req.body.pigColor);
  res.set("Content-Type", "text/html");
  res.send(svg);
});

export default app;
