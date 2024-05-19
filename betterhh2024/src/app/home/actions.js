"use server";
import Web3 from 'web3';
import BountyContractABI from '@/BountyContract.json';

const web3 = new Web3(Web3.givenProvider || 'http://10.92.99.128:7545');
const contractAddress = '0x4c112A29021897178D942CBD0Ad8C0F347814558';  // Replace with your actual contract address
const bountyContract = new web3.eth.Contract(BountyContractABI.abi, contractAddress);

export async function addFunds(amountInEther) {
    const addFunds = async () => {
        const amountInWei = web3.utils.toWei(amountInEther, 'ether');

        try {
            await bountyContract.methods.addFunds().send({
                from: contractAddress,
                value: amountInWei
            });
            console.log('Funds added successfully');
        } catch (error) {
            console.error('Error adding funds:', error);
        }
    };

    addFunds();
}