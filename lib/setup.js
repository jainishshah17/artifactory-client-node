var artifactoryConfigFile;

if (process.env.ARTIFACTORY_CONFIG_FILE) {
    artifactoryConfigFile = process.env.ARTIFACTORY_CONFIG_FILE;
} else {
    console.log("Configuration file is mendatory!");
    artifactoryConfigFile = '../artifactory.json';
}

var art = require(artifactoryConfigFile);

var configCheck = function (art) {
    if (art) {
        if (art.url && art.user && art.password) {
            return art;
        } else{
            console.error("art.url, art.user and art.password are mendatory fields.");
            return;
        }
    } else {
        console.error("Not able to read artifactory configuration file!");
        return;
    }
}

module.exports = configCheck(art);