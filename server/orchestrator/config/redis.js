const Redis = require('ioredis');

const redis = new Redis({
    host: 'redis-16619.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: 16619,
    password: 'E1MlqKmn8nMMMVylxVHMhjlaHarZTsYt'
});

module.exports = redis