var assert = require('assert');
var artCli = require('..');

var artifacts = new artCli.artifacts();

describe('Artifact Tests', function () {
    beforeEach(function () {
        function sleep(delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        };
        sleep(1000);
    });

    it('artifact upload', function () {
        var uploadFile = artifacts.uploadFile("generic-local/folder/test.zip", "./test/resources/test.zip");
        uploadFile.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('artifact upload with props', function () {
        var uploadFileWihProps = artifacts.uploadFile("generic-local/folder/test.tar", "./test/resources/test.tar", ";test=passed");
        uploadFileWihProps.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('folder info', function () {
        var folderInfo = artifacts.getFolderInfo("generic-local/folder")
        folderInfo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('file info', function () {
        var fileInfo = artifacts.getFileInfo("generic-local/folder/test.zip");
        fileInfo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('file info', function () {
        var fileInfo = artifacts.getFileInfo("generic-local/folder/test.tar");
        fileInfo.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('file stats', function () {
        var fileStats = artifacts.getFileStats("generic-local/folder/test.tar");
        fileStats.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('file props', function () {
        var fileProps = artifacts.getFileProps("generic-local/folder/test.tar", "");
        fileProps.then(function (result) {
            assert.notEqual(result, "");
        }, function (err) {
            console.log(err);
        });
    });

    it('artifact delete', function () {
        var deleteArtifact = artifacts.deleteFile("generic-local/folder/test.zip");
        deleteArtifact.then(function (result) {
        }, function (err) {
            console.log(err);
        });
    });
});