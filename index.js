const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/products", (req, res) => {
  res.send([
    {
      Username: "Ankit shahu",
      password: "shanky",
    },
    {
      Username: "Hello world",
      password: "shankyiv",
    },
  ]);
});

app.listen(port, () => {
  console.log("Express app is listening on port no " + port);
});
