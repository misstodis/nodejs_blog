const express = require("express");
const app = express();
const port = 5000;

// route
app.get("/", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World Ducx nguyen!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
