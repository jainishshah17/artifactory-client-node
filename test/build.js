var assert = require('assert');
var artCli = require('..');

var build = new artCli.build();

describe('Build Tests', function () {
    beforeEach(function() {
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
          };
          sleep(1000);
      });
      
    it('upload build 8', function () {
        var uploadBuild8 = build.uploadBuild("./test/resources/build8.json");
        uploadBuild8.then(function (result) {
            assert.equal(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('upload build 9', function () {
        var uploadBuild9 = build.uploadBuild("./test/resources/build9.json");
        uploadBuild9.then(function (result) {
            assert.equal(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get all builds', function () {
        var allBuilds = build.getAllBuild();
        allBuilds.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get build', function () {
        var testBuild = build.getBuild("artifactory-client-node");
        testBuild.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get build information', function () {
        var buildInfo = build.getBuildInfo("artifactory-client-node", 8);
        buildInfo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('promote build', function () {
        var promoteBuild = build.promoteBuild("artifactory-client-node", 8, "./test/resources/promote.json");
        promoteBuild.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('build difference', function () {
        var buildDiff = build.getBuildDiff("artifactory-client-node", 8, 9);
        buildDiff.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('delete build', function () {
        var buildDelete = build.deleteBuilds("artifactory-client-node", "8", "artifacts=1");
        buildDelete.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('delete all build', function () {
        var deleteAll = build.deleteAllBuilds("artifactory-client-node", "artifacts=1");
        deleteAll.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

});