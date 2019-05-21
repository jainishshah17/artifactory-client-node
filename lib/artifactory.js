var request = require('request');
var art = require('./setup');
function artifactory() {
};

artifactory.prototype.ping = function () {
    var options = {
        url: art.url + "/api/system/ping",
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

artifactory.prototype.system = function () {
    var options = {
        url: art.url + "/api/system",
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

artifactory.prototype.getLicenses = function () {
    var options = {
        url: art.url + "/api/system/licenses",
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

artifactory.prototype.installLicenses = function (licensesFile) {
    var options = {
        url: art.url + "/api/system/licenses",
        method: 'POST',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(licensesFile)
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

artifactory.prototype.getVersion = function () {
    var options = {
        url: art.url + "/api/system/version",
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

module.exports = artifactory;