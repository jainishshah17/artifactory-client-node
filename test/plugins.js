var assert = require('assert');
var artCli = require('..');

var plugins = new artCli.plugins();

describe('Plugins Tests', function () {
    beforeEach(function () {
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        };
        sleep(1000);
    });

    it('get plugin code', function () {
        var getPluginCode = plugins.getPluginCode("internalUser.groovy");
        getPluginCode.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get plugin info', function () {
        var getPluginsInfo = plugins.getPluginsInfo();
        getPluginsInfo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('reload plugins', function () {
        var reloadPlugins = plugins.reloadPlugins();
        reloadPlugins.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });
});