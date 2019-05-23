var assert = require('assert');
var artCli = require('..');

var config = new artCli.config();

describe('Plugins Tests', function () {
    beforeEach(function () {
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        };
        sleep(1000);
    });

    it('get config', function () {
        var getConfig = config.getConfig();
        getConfig.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get reverse proxy config', function () {
        var getReverseProxyConfig = config.getReverseProxyConfig();
        getReverseProxyConfig.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get reverse proxy snippet', function () {
        var getReverseProxySnippet = config.getReverseProxySnippet();
        getReverseProxySnippet.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });
});