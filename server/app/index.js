require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const os = require("os");

app.get("/", (req, res) => {
  const osType = os.type();
  res.send({ message: "Practice Docker with Node.js", os: osType });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
