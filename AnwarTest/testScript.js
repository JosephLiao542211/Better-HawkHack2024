const Web3 = require('web3');
const TruffleContract = require('@truffle/contract');
const BountyContractJSON = require('./build/contracts/BountyContract.json');

async function main() {
  // Connect to the local Ethereum node
  const web3 = new Web3('http://10.92.99.221:8546'); // Update the URL if needed
  const accounts = await web3.eth.getAccounts();
  const BountyContract = TruffleContract(BountyContractJSON);
  BountyContract.setProvider(web3.currentProvider);

  // Get the deployed contract instance
  const instance = await BountyContract.deployed();

  // Add funds
  console.log('Adding funds...');
  await instance.addFunds({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
  console.log('Funds added.');

  // Mark user for withdrawal
  console.log('Marking user for withdrawal...');
  await instance.markUserForWithdrawal(true, { from: accounts[0] });
  console.log('User marked for withdrawal.');

  // Set expiration and distribute funds (owner only)
  console.log('Setting expiration and distributing funds...');
  await instance.setExpiration({ from: accounts[0] });
  await instance.distributeFunds({ from: accounts[0] });
  console.log('Funds distributed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
