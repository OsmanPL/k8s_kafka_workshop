const express = require("express");
const router = express.Router();
const kafkaController = require("../controllers/kafka.controller");

router.post(
  "/sendMessage",
  kafkaController.sendMessage
);

module.exports = router;