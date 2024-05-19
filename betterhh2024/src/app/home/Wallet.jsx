// app/page.js
'use client';

import { useState } from 'react';
import Web3 from 'web3';
import BountyContractABI from '@/BountyContract.json';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8546');
const contractAddress = '0x2498E9CD0c70Ab1cC7ea4f4c7F7D572EBA987622';  // Replace with your actual contract address
const bountyContract = new web3.eth.Contract(BountyContractABI.abi, contractAddress);

export default function Home() {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        try {
            const response = await fetch('/api/connectWallet', {
                method: 'POST',
            });
            const data = await response.json();
            if (response.ok) {
                setAccount(data.account);
                console.log('Connected account:', data.account);
            } else {
                console.error('Error:', data.message);
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    };

    const addFunds = async (amountInEther) => {
        const amountInWei = web3.utils.toWei(amountInEther, 'ether');

        try {
            await bountyContract.methods.addFunds().send({
                from: account,
                value: amountInWei
            });
            console.log('Funds added successfully');
        } catch (error) {
            console.error('Error adding funds:', error);
        }
    };

    const markUserForWithdrawal = async (canWithdraw) => {
        try {
            const response = await fetch('/api/markUserForWithdrawal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ canWithdraw, userAddress: account })
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Marked for withdrawal successfully');
            } else {
                console.error('Error:', data.message);
            }
        } catch (error) {
            console.error('Error marking for withdrawal:', error);
        }
    };

    const distributeFunds = async () => {
        try {
            await bountyContract.methods.setExpiration().send({ from: account });
            await bountyContract.methods.distributeFunds().send({ from: account });
            console.log('Funds distributed successfully');
        } catch (error) {
            console.error('Error distributing funds:', error);
        }
    };

    return (
        <div>
            <h1>Connect to Ethereum Wallet</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
            {account && <p>Connected account: {account}</p>}
            <div>
                <label htmlFor="amountInput">Amount (ETH):</label>
                <input type="text" id="amountInput" />
                <button onClick={() => addFunds(document.getElementById('amountInput').value)}>Add Funds</button>
            </div>
            <div>
                <label htmlFor="canWithdrawCheckbox">Can Withdraw:</label>
                <input type="checkbox" id="canWithdrawCheckbox" />
                <button onClick={() => markUserForWithdrawal(document.getElementById('canWithdrawCheckbox').checked)}>Mark for Withdrawal</button>
            </div>
            <div>
                <button onClick={distributeFunds}>Distribute Funds (Owner Only)</button>
            </div>
        </div>
    );
}