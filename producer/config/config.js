// Used to store configuration variables
require('dotenv').config()

const port = process.env.PORT
const kafkaBrokers = process.env.KAFKA_BROKERS

module.exports = { port, kafkaBrokers }