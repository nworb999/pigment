import { app } from "./src/server.js";

const port = 3000;

app.listen(port, () => {
  console.log(`Pigments listening on port ${port}`);
});
