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

// Artifactory version
var version = art.getVersion();
version.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Artifactory get licenses
var licenses = art.getLicenses();
licenses.then(function (result) {
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

// Artifactory system storage information
var storage = art.getStorage();
storage.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Artifactory build CRUD 
var build = new artifactory.build();

// Get all builds
var uploadBuild8 = build.uploadBuild("./test/resources/build8.json");
uploadBuild8.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

var uploadBuild9 = build.uploadBuild("./test/resources/build9.json");
uploadBuild9.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get all builds
var allBuilds = build.getAllBuild();
allBuilds.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get one build
var testBuild = build.getBuild("art-test");
testBuild.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get build information
var buildInfo = build.getBuildInfo("art-test", 8);
buildInfo.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get promote build 
var promoteBuild = build.promoteBuild("art-test", 8, "./test/resources/promote.json");
promoteBuild.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Get build difference
var buildDiff = build.getBuildDiff("art-test", 9, 8);
buildDiff.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

// Delete builds
var buildDelete = build.deleteBuilds("art-test", "8,9", "artifacts=1");
buildDelete.then(function (result) {
    console.log(result)
}, function (err) {
    console.log(err);
});

// Delete All builds
var deleteAll = build.deleteAllBuilds("art-test", "artifacts=1");
deleteAll.then(function (result) {
    console.log(result)
}, function (err) {
    console.log(err);
});

// Artifactory artifacts CRUD 
var artifacts = new artifactory.artifacts();

// Upload file
var uploadFile = artifacts.uploadFile("generic-local/folder/test.zip", "./test/resources/test.zip");
uploadFile.then(function (result) {
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});

var uploadFileWihProps = artifacts.uploadFile("generic-local/folder/test.tar", "./test/resources/test.tar", ";test=passed");
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
