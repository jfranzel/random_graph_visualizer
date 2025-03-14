const express = require("express");
const route = require("./routes/route");
const app = express();
const port = 3001;
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));
app.use("/css", express.static(path.join(__dirname, "../public/stylesheets")));
app.use("/js", express.static(path.join(__dirname, "../public/javascripts")));
app.use("/img", express.static(path.join(__dirname, "../public/image")));

app.use("/", route);

// Set Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Liston on port 3000
app.listen(port, function () {
  console.log("Node app running on port " + port);
});

// const myLogger = function (req, res, next) {
//   console.log("LOGGED");
//   console.log(`Request time: ${req.requestTime}`);
//   next();
// };

// const requestTime = function (req, req, next) {
//   req.requestTime = Date.now();
//   console.log(`Request time: ${req.requestTime}`);
//   next();
// };

// app.use(myLogger);
// app.use(requestTime);

// app.get("/", (req, res) => {
//   let responseText = "Hello World! <br>";
//   responseText += `<small>Requested at: ${req.requestTime}</small>`;
//   res.send(responseText);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
