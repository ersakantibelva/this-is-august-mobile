const Redis = require('ioredis');
const REDIS_PASS = process.env.REDIS_PASS

const redis = new Redis({
    host: 'redis-16619.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: 16619,
    password: REDIS_PASS
});

module.exports = redis