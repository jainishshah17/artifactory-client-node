var request = require('request');
var fs = require('fs');
var art = require('./setup');

function support() {
};

support.prototype.createBundle = function (configFile) {
    var options = {
        url: art.url + "/api/system/support/bundle",
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

support.prototype.listBundles = function () {
    var options = {
        url: art.url + "/api/system/support/bundle",
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

support.prototype.getBundleDetail = function (bundleName) {
    var options = {
        url: art.url + "/api/system/support/bundle/" + bundleName,
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


support.prototype.getBundle = function (bundleName) {
    var options = {
        url: art.url + "/api/system/support/bundle/" + bundleName + "/archive",
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

support.prototype.deleteBundle = function (bundleName) {
    var options = {
        url: art.url + "/api/system/support/bundle/" + bundleName,
        method: 'DELETE',
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

module.exports = support;