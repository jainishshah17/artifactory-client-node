var request = require('request');
var art = require('./setup');

function config() {
};

config.prototype.getConfig = function () {
    var options = {
        url: art.url + "/api/system/configuration",
        method: 'GET',
        auth: {
            'user': art.user,
            'pass': art.password
        }
    };

    // Return new promise 
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

config.prototype.updateConfig = function (configFile) {
    var options = {
        url: art.url + "/api/system/configuration",
        method: 'POST',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(configFile)
    };

    // Return new promise 
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

config.prototype.getReverseProxyConfig = function () {
    var options = {
        url: art.url + "/api/system/configuration/webServer",
        method: 'GET',
        auth: {
            'user': art.user,
            'pass': art.password
        }
    };

    // Return new promise 
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

config.prototype.updateReverseProxyConfig = function (configFile) {
    var options = {
        url: art.url + "/api/system/configuration/webServer",
        method: 'POST',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(configFile)
    };

    // Return new promise 
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

config.prototype.getReverseProxySnippet = function () {
    var options = {
        url: art.url + "/api/system/configuration/reverseProxy/nginx",
        method: 'GET',
        auth: {
            'user': art.user,
            'pass': art.password
        }
    };

    // Return new promise 
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

module.exports = config;