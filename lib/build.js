var request = require('request');
var art = require('../artifactory.json');

// art Build
function build() {
};

build.prototype.getAllBuild = function(){
    request({
        url: art.url + "/api/build", 
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

build.prototype.getBuild = function(buildName){
    request({
        url: art.url + "/api/build/" + buildName ,
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

build.prototype.getBuildInfo = function(buildName, buildNumber){
    request({
        url: art.url + "/api/build/" + buildName + "/" + buildNumber,
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

build.prototype.getBuildDiff = function(buildName, buildNumber, oldBuildNumber){
    request({
        url: art.url + "/api/build/" + buildName + "/" + buildNumber + "?diff=" + oldBuildNumber,
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

build.prototype.deleteBuilds = function(buildName, buildNumbers, extraArgs){
    request({
        url: art.url + "/api/build/" + buildName + "?buildNumbers=" + buildNumbers + "&" + extraArgs,
        method: 'DELETE', 
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

module.exports = build;