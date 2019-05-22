'use strict';

var artifactory = require('./lib/artifactory');
var build = require('./lib/build');
var artifacts = require('./lib/artifacts');
var config =  require('./lib/config');
var security =  require('./lib/security');
var plugins =  require('./lib/plugins');
var repositories =  require('./lib/repositories');
var support =  require('./lib/support');

module.exports = { artifactory, build, artifacts, config, security, plugins, repositories, support };