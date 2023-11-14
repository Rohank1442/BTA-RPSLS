import { useState, useEffect } from 'react';
import contractS from '.././RPSLS.sol/RPSLSFinal.json'
import { useNavigate } from 'react-router-dom';
import { ContractState } from '../Context/ContractProvider';

const { ethers, JsonRpcProvider } = require('ethers');
export const Home = () => {

  const { account, contract } = ContractState();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/newgame", { state: { account: account } })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='account' >Account : {account ? account : "Not connected"}</p>
        <div className='new-game' onClick={handleClick}>Propose new game session</div>
      </header>
    </div>
  )
}