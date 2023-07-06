require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Igor Sprovieri API is running");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Igor Sprovieri API listening on port ${port}`);
});
