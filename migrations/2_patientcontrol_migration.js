const PatientControl = artifacts.require("PatientControl");

module.exports = function (deployer) {
  deployer.deploy(PatientControl);
};