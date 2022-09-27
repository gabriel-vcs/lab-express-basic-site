const express = require("express");

const app = express();
app.use(express.static("public"));

app.listen(3001, () => {
  console.log("web app started");
});

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/view/home-page.html");
});
