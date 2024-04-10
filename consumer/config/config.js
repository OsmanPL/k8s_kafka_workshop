// Used to store configuration variables

require('dotenv').config()

const port = process.env.PORT
const kafkaBrokers = process.env.KAFKA_BROKERS
const kafkaTopic = process.env.KAFKA_TOPIC

module.exports = { port, kafkaBrokers , kafkaTopic}