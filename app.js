const express = require("express");
const bodyParser = require("body-parser");
const viewsRouter = require("./routes/viewsRouter");
const tasksRouter = require("./routes/tasksRouter");
const path = require("path");

const app = express();
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", viewsRouter);
app.use("/api/tasks", tasksRouter);

// Uncomment if AppError is defined
// app.all("*", (req, res, next) => {
//   next(new AppError("Cannot find route on this server", 404));
// });

module.exports = app;
