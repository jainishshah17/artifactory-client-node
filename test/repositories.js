var assert = require('assert');
var artCli = require('..');

var repositories = new artCli.repositories();

describe('Repositories Tests', function () {
    beforeEach(function () {
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        };
        sleep(1000);
    });


    it('create local repo', function () {
        var localRepo = repositories.createRepo("helm-dev-local", "./test/resources/local-repo.json");
        localRepo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });


    it('create remote repo', function () {
        var remoteRepo = repositories.createRepo("helm-dev-remote","./test/resources/remote-repo.json");
        remoteRepo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });


    it('create virtual repo', function () {
        var virtualRepo = repositories.createRepo("helm-dev","./test/resources/virtual-repo.json");
        virtualRepo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('get repo config', function () {
        var repoConfig = repositories.getRepoConfig("helm-dev");
        repoConfig.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('list repos', function () {
        var listRepos = repositories.getAllRepos();
        listRepos.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('update repo', function () {
        var updateRepo = repositories.updateRepo("helm-dev","./test/resources/virtual-repo.json" );
        updateRepo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('delete repo', function () {
        var deleteRepo = repositories.deleteRepo("helm-dev");
        deleteRepo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });
});