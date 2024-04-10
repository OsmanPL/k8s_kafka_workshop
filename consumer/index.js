const { Kafka } = require("kafkajs");

const config = require("./config/config");

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [config.kafkaBrokers]
});
const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic:[config.kafkaTopic] });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
        topic: topic,
        partition: partition
      });
    }
  });
};

run().catch((e) => console.error(`[example/consumer] ${e.message}`, e));
