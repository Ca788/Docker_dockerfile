const express = require("express");
const app = express();
const os = require("os");

app.get("/", (req, res) => {
  res.send(`Hello World from ${os.type()} ${os.release()} ${os.platform()}`);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
