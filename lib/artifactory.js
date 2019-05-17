var request = require('request');
var art = require('../artifactory.json');

function artifactory() {

};

artifactory.prototype.ping = function () {
    request({
        url: art.url + "/api/system/ping",
        method: 'GET',
        auth: {
            'user': art.user,
            'pass': art.password
        }
    }, function (error, response, body) {
        if (error) {
            console.log("Error is : " + error);
            return error;
        } else {
            console.log("Response is : " + body);
            return body;
        }
    });
};

artifactory.prototype.system = function () {
    request({
        url: art.url + "/api/system",
        method: 'GET',
        auth: {
            'user': art.user,
            'pass': art.password
        }
    }, function (error, response, body) {
        if (error) {
            console.log("Error is : " + error);
            return error;
        } else {
            console.log("Response is : " + body);
            return body;
        }
    })
};

module.exports = artifactory;