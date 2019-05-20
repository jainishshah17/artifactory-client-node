var assert = require('assert');
var artifactory = require('..');

var art = new artifactory.artifactory();

// Artifactory healthcheck
var ping = art.ping();
ping.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Artifactory System Information
var system = art.system();
system.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Artifactory build CRUD 
var build = new artifactory.build();

// Get all builds
var allBuilds = build.getAllBuild();
allBuilds.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get one build
var testBuild = build.getBuild("test");
testBuild.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get build information
var build2 = build.getBuildInfo("art-test", 2);
build2.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get build difference
var buildDiff = build.getBuildDiff("test", 2, 1);
buildDiff.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Delete builds
var buildDelete = build.deleteBuilds("test", "2,1", "artifacts=1");
buildDelete.then(function (result) {
    console.log(result)
}, function (err) {
    console.log(err);
});

// Artifactory artifacts CRUD 
var artifacts = new artifactory.artifacts();

// Upload file
var uploadFile = artifacts.uploadFile("generic-local/folder/test.zip", "/Users/jainish.shah/development/jainishshah17/artifactory-client-node/test.zip");
uploadFile.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

var uploadFileWihProps = artifacts.uploadFile("generic-local/folder/test.tar", "/Users/jainish.shah/development/jainishshah17/artifactory-client-node/test.tar", ";test=passed");
uploadFileWihProps.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get folder Info
var folderInfo = artifacts.getFolderInfo("generic-local/folder")
folderInfo.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get file Info
var fileInfo = artifacts.getFileInfo("generic-local/folder/ecstatic-3.3.1.tgz");
fileInfo.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get file stats
var fileStats = artifacts.getFileStats("generic-local/folder/ecstatic-3.3.1.tgz");
fileStats.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get file properties
var fileProps = artifacts.getFileProps("generic-local/folder/ecstatic-3.3.1.tgz", "");
fileProps.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Delete artifacts
var deleteArtifact =  artifacts.deleteFile("generic-local/artifactory.jpg");
deleteArtifact.then(function (result) {
    console.log(result)
}, function (err) {
    console.log(err);
});
