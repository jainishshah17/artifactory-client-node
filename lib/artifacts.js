var request = require('request');
var art = require('../artifactory.json');

function artifacts(){

};

artifacts.prototype.getFolderInfo = function() {
    request({
        url: art.url + "/api/system/ping", //URL to hit
        method: 'GET', //Specify the method
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

artifacts.prototype.getFileInfo = function() {
    request({
        url: art.url + "/api/system", //URL to hit
        method: 'GET', //Specify the method
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

module.exports = artifacts;