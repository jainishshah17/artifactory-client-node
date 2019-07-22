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
        url: art.url + "/api/security/users/" + userName,
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

security.prototype.getAllPermission = function () {
    var options = {
        url: art.url + "/api/security/permissions",
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


security.prototype.getPermission = function (permissionName) {
    var options = {
        url: art.url + "/api/security/permissions/" +  permissionName,
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

security.prototype.createPermission = function (permissionName, permissionFile) {
    var options = {
        url: art.url + "/api/v2/security/permissions/" +  permissionName,
        method: 'PUT',
        auth: {
            'user': art.user,
            'pass': art.password
        },
        body: fs.createReadStream(permissionFile)
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

security.prototype.deletePermission = function (permissionName) {
    var options = {
        url: art.url + "/api/security/permissions/" +  permissionName,
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

security.prototype.getAllToken = function () {
    var options = {
        url: art.url + "/api/security/token" ,
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
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


security.prototype.createToken = function (userName, scope) {
    var options = {
        url: art.url + "/api/security/token",
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        form: {username: userName, scope: scope},
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

security.prototype.refreshToken = function (refreshToken, accessToken, userName, scope, expiresIn) {
    var options = {
        url: art.url + "/api/security/token",
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        form: {grant_type: "refresh_token", refresh_token: refreshToken, access_token: accessToken, username: userName, scope: scope, expires_in: expiresIn },
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

security.prototype.revokeToken = function (tokenId) {
    var options = {
        url: art.url + "/api/security/token/revoke",
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        form: {token_id: tokenId},
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

module.exports = security;