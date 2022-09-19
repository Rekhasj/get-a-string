const express = require("express");
const app = express();

app.get("/", (request, response) => {
  reponse.send("Express JS");
});
app.listen(2000);

module.exports = app;
