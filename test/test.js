var assert = require('assert');
var artifactory = require('..');

var art = new artifactory.artifactory();
var ping = art.ping();
var system = art.system();
var build = new artifactory.build();
var allBuilds = build.getAllBuild();
var testBuild = build.getBuild("test");
var build2 = build.getBuildInfo("art-test", 2);
var buildDiff = build.getBuildDiff("test", 2, 1);
var buildDelete = build.deleteBuilds("test", "2,1", "artifacts=1");
