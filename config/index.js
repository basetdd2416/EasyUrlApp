/**
 * Created by apisit on 3/6/2560.
 */

/**
 *
 * provide config in our application.
 */
module.exports = {
    domain: 'http://localhost:3000',
    mongodb: {
        uri: 'mongodb://localhost:27017/EasyLinkAp' || process.env.MONGO_DB_URI
    },
    secret: "easyappurl" || process.env.SECRET_KEY
};
