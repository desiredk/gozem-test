'use strict';

const logger = require('../logger/api.logger');
const mongoose = require('mongoose');

const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/db.config.json')[env];

const getDB_URI = () => {
    let uri = "";

    if (config['username'] && config['password']) {
        uri = `mongodb://${config['username']}:${config['password']}@${config['host']}:${config['port']}`;
    } else {
        uri = `mongodb://${config['host']}:${config['port']}`;
    }

    return uri;
};

const connect = () => {
    const options = {
        dbName: config['database']
    };

    mongoose.connect(`${getDB_URI()}`, options)
        .then(async () => {
            logger.info("Successfully connected to Mongodb");
            console.log("Successfully connected to Mongodb")
        })
        .catch(err => {
            logger.error("Connexion error => " + err);
            console.log("Connexion error => " + err)
            process.exit();
        });
}

const getDb = () => {
  return mongoose;
}

module.exports = {
  connect,
  getDb
}
