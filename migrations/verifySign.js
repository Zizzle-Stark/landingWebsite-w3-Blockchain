const verifySign = artifacts.require('../contracts/verifySign.sol')

module.exports = function(deployer){
    deployer.deploy(verifySign);
}