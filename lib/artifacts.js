var request = require('request');
var fs = require('fs');
var art = require('../artifactory.json');

function artifacts() {
};

artifacts.prototype.getFolderInfo = function (folderPath) {
    var options = {
        url: art.url + "/api/storage/" + folderPath,
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

artifacts.prototype.getFileInfo = function (filePath) {
    var options = {
        url: art.url + "/api/storage/" + filePath,
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

artifacts.prototype.getFileStats = function (filePath) {
    var options = {
        url: art.url + "/api/storage/" + filePath + "?stats",
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

artifacts.prototype.getFileProps = function (filePath, properties) {
    var options = {
        url: art.url + "/api/storage/" + filePath + "?properties" + properties,
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

artifacts.prototype.uploadFile = function (artifactPath, filePath, properties) {
    var url;
    if (properties) {
        url = art.url + "/" + artifactPath + properties
    } else {
        url = art.url +  "/" + artifactPath
    }
    var options = {
        url: url,
        method: 'PUT',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(filePath)
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

artifacts.prototype.deleteFile = function (filePath) {
    var options = {
        url: art.url + "/" + filePath,
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

module.exports = artifacts;