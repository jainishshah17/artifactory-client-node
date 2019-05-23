var assert = require('assert');
var artCli = require('..');

var art = new artCli.artifactory();

describe('Artifactory Tests', function () {
    beforeEach(function () {
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        };
        sleep(1000);
    });

    it('health check', function () {
        var ping = art.ping();
        ping.then(function (result) {
            assert.equal(result, "OK");
        }, function (err) {
            console.log(err);
        });
    });

    it('version check', function () {
        var version = art.getVersion();
        version.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('licenses check', function () {
        var licenses = art.getLicenses();
        licenses.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('storage check', function () {
        var storage = art.getStorage();
        storage.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });
});