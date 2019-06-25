const Bazaar = artifacts.require('Bazaar');

module.exports = function(deployer){
    deployer.deploy(Bazaar);
};