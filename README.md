# artifactory-client-node

Artifactory Node Client
Artifactory Node client provides simple yet powerful Artifactory connection and management within your Node code.

## Getting Started
### Add *artifactory-client-node* as a dependency to your node package.
```
npm install artifactory-client-node --save
```

### Examples:
This section includes a few usage examples of the Node client APIs from your application code.

#### Setting up Artifactory
Crete artifactory configuration file. e.g `artifactory.json`
```json
{
    "serverId": "dev",
    "url": "http://jainish.artifactory.com/artifactory",
    "user": "admin",
    "password": "password"
}
```

set environment variable `ARTIFACTORY_CONFIG_FILE` with absolute path to artifactory configuration file.
```
export ARTIFACTORY_CONFIG_FILE=/users/home/jainishshah17/artifactory-client-node/artifactory.json
```

Note: If you are using Self-signed SSL certificate. 
Set environment variable `export NODE_TLS_REJECT_UNAUTHORIZED=0` to ignore SSL check.

#### Artifactory Health Check
```
  var artCli = require('artifactory-client-node');
  var art = new artCli.artifactory();

  var ping = art.ping();
  ping.then(function (result) {
      console.log(result);
  }, function (err) {
      console.log(err);
  });
```

#### Artifactory System Information 
```
  var artCli = require('artifactory-client-node');
  var art = new artCli.artifactory();

  var system = art.system();
  system.then(function (result) {
      console.log(result);
  }, function (err) {
      console.log(err);
  });
```

#### Artifactory get all builds
```
  var artCli = require('artifactory-client-node');
  var build = new artCli.build();

  var allBuilds = build.getAllBuild();
    allBuilds.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```

#### Artifactory get build
```
  var artCli = require('artifactory-client-node');
  var build = new artCli.build();

  var testBuild = build.getBuild("test");
    testBuild.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```

#### Artifactory get build information
```
  var artCli = require('artifactory-client-node');
  var build = new artCli.build();
  var build2 = build.getBuildInfo("art-test", 2);
    build2.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```

#### Artifactory get build difference
```
  var artCli = require('artifactory-client-node');
  var art = new artCli.artifactory();
    var buildDiff = build.getBuildDiff("test", 2, 1);
    buildDiff.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```

#### Artifactory delete builds
```
  var artCli = require('artifactory-client-node');
  var build = new artCli.build();
    var buildDelete = build.deleteBuilds("test", "2,1", "artifacts=1");
    buildDelete.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```

#### Artifactory get folder Info
```
  var artCli = require('artifactory-client-node');
  var artifacts = new artifactory.artifacts();
    var folderInfo = artifacts.getFolderInfo("generic-local/folder");
    folderInfo.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```

#### Artifactory get file Info
```
  var artCli = require('artifactory-client-node');
  var artifacts = new artifactory.artifacts();
  var fileInfo = artifacts.getFileInfo("generic-local/folder/my-package-3.3.1.tgz");
    fileInfo.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```

#### Artifactory get file stats
```
  var artCli = require('artifactory-client-node');
  var artifacts = new artifactory.artifacts();
  var fileStats = artifacts.getFileStats("generic-local/folder/my-package-3.3.1.tgz");
    fileStats.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```


#### Artifactory get file properties
```
  var artCli = require('artifactory-client-node');
  var artifacts = new artifactory.artifacts();
    var fileProps = artifacts.getFileProps("generic-local/folder/my-package-3.3.1.tgz", "");
    fileProps.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```


#### Artifactory delete artifacts
```
  var artCli = require('artifactory-client-node');
  var artifacts = new artifactory.artifacts();
    var deleteArtifact =  artifacts.deleteFile("generic-local/artifactory.jpg");
    deleteArtifact.then(function (result) {
        console.log(result)
    }, function (err) {
        console.log(err);
    });
```