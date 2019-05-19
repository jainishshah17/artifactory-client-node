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
    var result = result;
    console.log(result)
}, function (err) {
    console.log(err);
});
