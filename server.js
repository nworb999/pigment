import express from "express";
import bodyParser from "body-parser";
import path from "path";
import next from "next";
import { createPigment } from "./src/utils.js";

const rootDir = path.resolve(process.cwd());

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const port = 3000;

  // serve css as static
  server.use(express.static(rootDir));
  // use body-parser
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.get("/hello", (req, res) => {
    res.send("Howdy world!");
  });

  server.get("/", (req, res) => {
    res.sendFile(path.resolve(rootDir, "index.html"));
  });

  server.post("/", (req, res) => {
    const svg = createPigment(req.body.pigColor);
    res.set("Content-Type", "text/html");
    res.send(svg);
  });

  server.listen(port, () => {
    console.log(`Pigments listening on port ${port}`);
  });
});
