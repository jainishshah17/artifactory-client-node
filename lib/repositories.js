var request = require('request');
var art = require('./setup');

function repositories() {
};

repositories.prototype.getAllRepos = function (repoType, packageType) {
    var url;
    if(repoType && packageType){
        url = art.url + "/api/repositories?type=" + repoType + "&packageType=" + packageType;
    } else{
        url = art.url + "/api/repositories";
    }
    var options = {
        url: url,
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


repositories.prototype.getRepoConfig = function (repoName) {
    var options = {
        url: art.url + "/api/repositories/" + repoName,
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

repositories.prototype.createRepo = function (repoName, repoFile) {
    var options = {
        url: art.url + "/api/repositories/" + repoName,
        method: 'PUT',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(repoFile)
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

repositories.prototype.updateRepo = function (repoName, repoFile) {
    var options = {
        url: art.url + "/api/repositories/" + repoName,
        method: 'POST',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(repoFile)
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

repositories.prototype.deleteRepo = function (repoName) {
    var options = {
        url: art.url + "/api/repositories/" + repoName,
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

module.exports = repositories;