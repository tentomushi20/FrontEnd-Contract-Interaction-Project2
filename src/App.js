import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers';
import { useState, useEffect } from 'react';
import { contractAbi, contractAddress } from './Constant/constant';
// import { connected } from 'process';
import React from 'react';

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [gameName,setGameName] = useState('');
  const [newGameName,setnewGameName] = useState('');



  async function connectToMetaMask(){
    if(window.ethereum){
      try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts",[]);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setIsConnected(true)
        console.log("MetaMask Connected : "   + address );

      }
      catch(err){
        console.log(err);
      }
    }
    else{
      console.log("Metamask is not detected");
    }
  }

  async function getGame(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  
  const contractInstance = new ethers.Contract(
    contractAddress,contractAbi,signer
  );

  try{
    const mName = await contractInstance.getGame();
    setGameName(mName);
  }
 catch(err){
  console.log(err);
 }
  }

  async function setGame(){
    console.log("Hello");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );

      const sm = await contractInstance.setGame(
        newGameName
      );
      await sm.wait();
      setGameName(newGameName);
  }
  if(isConnected){
    return (
      <div className='bg-blue-50 flex items-center justify-center h-screen'>
      
      <form className="max-w-md mx-auto mt-8">
      <div className="mb-4">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Game Name</h3><br/>
          <h1  className="text-5xl font-bold mb-8 text-blue-800">{gameName}</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="gameName" className="block text-gray-700 font-bold mb-2">Game Name</label>
          <input
            type="text"
            id="gameName"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={newGameName}
            onChange={(e) => setnewGameName(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
          
            onClick={setGame}
          >
            Game Set
          </button>
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          
            onClick={getGame}
          >
            Game Get
          </button>
        </div>
      </form>
      </div>
    );
  }
  else{
    return (
      <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-blue-700">Connect Your Wallet</h1>
        <div className="flex flex-col items-center space-y-4">
          <button 
          onClick={connectToMetaMask}
          className="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Connect
          </button>
          
        </div>
      </div>
    </div>
      );
  }
}

export default App;
