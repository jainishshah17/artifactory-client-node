var assert = require('assert');
var artCli = require('..');

var security = new artCli.security();

describe('Security Tests', function () {
    beforeEach(function () {
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        };
        sleep(1000);
    });

    it('create group', function () {
        var createGoup = security.createGroup("dev", "./test/resources/group.json");
        createGoup.then(function (result) {
            assert.equal(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get all groups', function () {
        var allGroups = security.getAllGroups();
        allGroups.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get group', function () {
        var group = security.getGroup("dev");
        group.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('update group', function () {
        var updateGroup = security.updateGroup("dev", "./test/resources/group.json");
        updateGroup.then(function (result) {
            assert.equal(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('create user', function () {
        var creatUser = security.createUser("jainishs", "./test/resources/user.json");
        creatUser.then(function (result) {
            assert.equal(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get all users', function () {
        var getAllUsers = security.getAllUsers();
        getAllUsers.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get user', function () {
        var getUser = security.getUser("jainishs");
        getUser.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('create permission', function () {
        var createPermission = security.createPermission("developers", "./test/resources/permission.json");
        createPermission.then(function (result) {
            assert.equal(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get all permission', function () {
        var getAllPermission = security.getAllPermission();
        getAllPermission.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get permission', function () {
        var getPermission = security.getPermission("developers");
        getPermission.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('encrypted password', function () {
        var encryptedPassword = security.getEncryptedPassword();
        encryptedPassword.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('create API key', function () {
        var createApiKey = security.createApiKey();
        createApiKey.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('regenerate API key', function () {
        var regenApiKey = security.regenerateApiKey();
        regenApiKey.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get API Key', function () {
        var getApiKey = security.getApiKey();
        getApiKey.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('revoke API Key', function () {
        var revokeApiKey = security.revokeApiKey();
        revokeApiKey.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('revoke user API Key', function () {
        var revokeUserApiKey = security.revokeUserApiKey("jainishs");
        revokeUserApiKey.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('create Tokens', function () {
        var createToken = security.createToken("jainishs", "member-of-groups:readers");
        createToken.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get All Tokens', function () {
        var getAllToken = security.getAllToken();
        getAllToken.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('refresh Token', function () {
        var refreshToken = security.refreshToken("test", "test", "jainishs","member-of-groups:readers", 3600);
        refreshToken.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('revoke Token', function () {
        var revokeToken = security.revokeToken("token");
        revokeToken.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('delete permission', function () {
        var deletePermission = security.deletePermission("developers");
        deletePermission.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('delete group', function () {
        var deleteGroup = security.deleteGroup("dev");
        deleteGroup.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('delete user', function () {
        var deleteUser = security.deleteUser("jainishs");
        deleteUser.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });
});