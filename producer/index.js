var kafkaRouter = require("./routes/kafka.route");

const config = require("./config/config");

var express = require("express");

var app = express();
const port = config.port;

app.use(express.json());

app.use("/", kafkaRouter);

app.get("/", function (req, res) {
  res.send("Bienvenido a Playwrigth-API");
});

app.listen(port, function () {
  console.log("Listening on port", port);
});