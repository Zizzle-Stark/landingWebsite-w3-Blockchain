const landDeploy = artifacts.require('../contracts/land.sol')

module.exports = function(deployer){
    deployer.deploy(landDeploy);
}