var request = require('request');
var fs = require('fs');
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
    var body;
    if(typeof(repoFile) === "object"){
        body = JSON.stringify(repoFile);
    } else {
        body = fs.createReadStream(repoFile);
    }

    var options = {
        url: art.url + "/api/repositories/" + repoName,
        method: 'POST',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: body,
        headers : {
            "content-type": "application/json",
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

repositories.prototype.setOnline = function (repoName) {

    let repos = this;

    return new Promise(function (resolve, reject) {
        let getRepoConfig = repos.getRepoConfig(repoName);
        getRepoConfig.then(function (repoConfig) {
            let repoConfigJson = JSON.parse(repoConfig);
            if (repoConfigJson.rclass === "remote") {
                if (repoConfigJson.offline === false) {
                    resolve("It's already online");
                } else {
                    repoConfigJson.offline = false;
                    let updateRepo = repos.updateRepo(repoName, repoConfigJson);
                    updateRepo.then(function (result) {
                        resolve(result);
                    }, function (err) {
                        reject(err);
                    });
                }
            } else {
                resolve("It's not remote repo");
            }

        }, function (err) {
            reject(err);
        });
    });
};


repositories.prototype.setOffline = function (repoName) {
    let repos = this;

    return new Promise(function (resolve, reject) {
        let getRepoConfig = repos.getRepoConfig(repoName);
        getRepoConfig.then(function (repoConfig) {
            let repoConfigJson = JSON.parse(repoConfig);
            if (repoConfigJson.rclass === "remote") {
                if (repoConfigJson.offline === true) {
                    resolve("It's already offline");
                } else {
                    repoConfigJson.offline = true;
                    let updateRepo = repos.updateRepo(repoName, repoConfigJson);
                    updateRepo.then(function (result) {
                        resolve(result);
                    }, function (err) {
                        reject(err);
                    });
                }
            } else {
                resolve("It's not remote repo");
            }

        }, function (err) {
            reject(err);
        });
    });
};


module.exports = repositories;