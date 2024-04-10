const { Kafka } = require("kafkajs");

const config = require("../config/config");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: [config.kafkaBrokers],
});

exports.sendMessage = async (req, res) => {
  try {
    const { topic, message } = req.body;

    const producer = kafka.producer();

    await producer.connect();

    console.log("Sending message to topic: ", topic);
    console.log("Message: ", message);
    await producer.send({
      topic: topic,
      messages: [{ value: message }],
    });

    await producer.disconnect();

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message: ", error);
    res.status(500).json({ message: "Error sending message" });
  }
};
