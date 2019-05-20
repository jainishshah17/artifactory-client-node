var request = require('request');
var fs = require('fs');
var art = require('./setup');

function security() {
};

security.prototype.getAllUsers = function () {
    var options = {
        url: art.url + "/api/security/users",
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

security.prototype.getUser = function (userName) {
    var options = {
        url: art.url + "/api/security/users" + userName,
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


security.prototype.getEncryptedPassword = function () {
    var options = {
        url: art.url + "/api/security/encryptedPassword",
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


security.prototype.createUser = function (userName, userFile) {
    var options = {
        url: art.url + "/api/security/users/" + userName,
        method: 'PUT',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(userFile)
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

security.prototype.updateUser = function (userName, userFile) {
    var options = {
        url: art.url + "/api/security/users/" + userName,
        method: 'PUT',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(userFile)
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


security.prototype.deleteUser = function (userName) {
    var options = {
        url: art.url + "/api/security/users/" + userName,
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

security.prototype.expirePassword = function (userName) {
    var options = {
        url: art.url + "/api/security/users/authorization/expirePassword/" + userName,
        method: 'POST',
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

security.prototype.createApiKey = function () {
    var options = {
        url: art.url + "/api/security/apiKey",
        method: 'POST',
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

security.prototype.regenerateApiKey = function () {
    var options = {
        url: art.url + "/api/security/apiKey",
        method: 'PUT',
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

security.prototype.getApiKey = function () {
    var options = {
        url: art.url + "/api/security/apiKey",
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

security.prototype.revokeApiKey = function () {
    var options = {
        url: art.url + "/api/security/apiKey",
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

security.prototype.revokeUserApiKey = function (userName) {
    var options = {
        url: art.url + "/api/security/apiKey/" + userName,
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

security.prototype.getAllGroups = function () {
    var options = {
        url: art.url + "/api/security/groups",
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

security.prototype.getGroup = function (groupName) {
    var options = {
        url: art.url + "/api/security/groups/" +  groupName,
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

security.prototype.createGroup = function (groupName, groupFile) {
    var options = {
        url: art.url + "/api/security/groups/" +  groupName,
        method: 'PUT',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(groupFile)
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

security.prototype.updateGroup = function (groupName, groupFile) {
    var options = {
        url: art.url + "/api/security/groups/" +  groupName,
        method: 'POST',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(groupFile)
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

security.prototype.deleteGroup = function (groupName) {
    var options = {
        url: art.url + "/api/security/groups/" +  groupName,
        method: 'DELETE',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(groupFile)
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


module.exports = security;