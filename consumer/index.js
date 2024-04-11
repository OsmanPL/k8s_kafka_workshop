const { Kafka } = require("kafkajs");

const config = require("./config/config");

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [config.kafkaBrokers]
});
const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {

  const topicName = config.kafkaTopic;

  console.log("Listening to topic: ", topicName); 

  await consumer.connect();
  await consumer.subscribe({ topics: [topicName], fromBeginning: true});
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
        topic: topic
      });
    }
  });
};

run().catch((e) => console.error(`[example/consumer] ${e.message}`, e));
