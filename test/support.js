var assert = require('assert');
var artCli = require('..');

var support = new artCli.support();

describe('Support Tests', function () {
    beforeEach(function () {
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        };
        sleep(1000);
    });

    it('create bundle', function () {
        var createBundle = support.createBundle("./test/resources/bundle.json");
        createBundle.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('list bundle', function () {
        var listBundle = support.listBundles();
        listBundle.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get bundle details', function () {
        var bundleDetails = support.getBundleDetail("bundle");
        bundleDetails.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get bundle', function () {
        var bundle = support.getBundle("bundle");
        bundle.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('delete bundle', function () {
        var deleteBundle = support.deleteBundle("bundle");
        deleteBundle.then(function (result) {
            assert.equal(result, "");
        }, function (err) {
            console.log(err);
        });
    });
});