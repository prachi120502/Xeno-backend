
const redis = require('redis');
const client = redis.createClient();

exports.publishMessage = (channel, message) => {
  client.publish(channel, JSON.stringify(message));
};
