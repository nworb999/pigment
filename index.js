import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Howdy world!");
});

app.listen(port, () => {
  console.log(`Pigments listening on port ${port}`);
});
