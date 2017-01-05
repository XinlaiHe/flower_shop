"use strict";

var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "build")));

app.listen(3000, function() {
  console.log("App listening on port 3000!");
});
