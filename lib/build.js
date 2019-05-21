var request = require('request');
var fs = require('fs');
var art = require('./setup');

// Artifactory Builds
function build() {
};

build.prototype.getAllBuild = function () {
    var options = {
        url: art.url + "/api/build",
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

build.prototype.getBuild = function (buildName) {
    var options = {
        url: art.url + "/api/build/" + buildName,
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

build.prototype.getBuildInfo = function (buildName, buildNumber) {

    var options = {
        url: art.url + "/api/build/" + buildName + "/" + buildNumber,
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

build.prototype.uploadBuild = function (buildConfig) {
    var options = {
        url: art.url + "/api/build",
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(buildConfig)
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

build.prototype.promoteBuild = function (buildName, buildNumber, promoteConfig) {
    var options = {
        url: art.url + "/api/build/promote/" + buildName + "/" + buildNumber,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(promoteConfig)
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

build.prototype.getBuildDiff = function (buildName, buildNumber, oldBuildNumber) {
    var options = {
        url: art.url + "/api/build/" + buildName + "/" + buildNumber + "?diff=" + oldBuildNumber,
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

build.prototype.deleteBuilds = function (buildName, buildNumbers, extraArgs) {
    var options = {
        url: art.url + "/api/build/" + buildName + "?buildNumbers=" + buildNumbers + "&" + extraArgs,
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

build.prototype.deleteAllBuilds = function (buildName, extraArgs) {
    var options = {
        url: art.url + "/api/build/" + buildName + "?deleteAll=1" + "&" + extraArgs,
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

module.exports = build;