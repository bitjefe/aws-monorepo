/* eslint-disable-line */ 
const aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context, callback) => {
    let date = new Date()
    if (event.request.userAttributes.sub) {
        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'Host'},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: process.env.HOSTTABLE
        }

        try {
            await ddb.putItem(params).promise()
            console.log("Success adding user to userPool group and db table")
            callback(null, event);
        } catch (err) {
            console.log("Error", err)
            callback(err);
        }
    } else {
        // Nothing to do, the user's id not known
        callback(null, event);
    }
};