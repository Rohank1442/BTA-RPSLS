import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom"
import { NewGame } from "./pages/NewGame.js"
import { Home } from './pages/Home.js'
import { GameSession } from './pages/GameSession.js';
import Results from './pages/Results.js';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newgame' element={<NewGame />} />
      <Route path='/gamesession' element={<GameSession />} />
      <Route path='/result' element={<Results />} />
    </Routes>
  );
}

export default App;


{/* <a
          className="App-link"
          onClick={requestAccount}
        >
          {address}
        </a>
        <a className='App-link'
        >
          {balance}
        </a>
        <a className='App-link'
          onClick={changeChain}
        >
          add Chain
        </a>
        <a
          className="App-link"
          onClick={sendTx}
        >
          Send Transaction
        </a>
        <a
          className="App-link"
          onClick={player}
        >
          play
        </a> */}

// function App() {
//   const { ethereum } = window;
//   const [address, setAddress] = useState('Connect Wallet');
//   const [balance, setBalance] = useState('');
//   const [play, setPlay] = useState('');
//   const [provider, setProvider] = useState('');
//   // const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();

//   const contractAddress = "0x3d791aebF11D469DC1604eb8c028E7885845fEBf";

//   const alchemyProvider = new ethers.providers.JsonRpcProvider(
//     "https://eth-sepolia.g.alchemy.com/v2/7aCctjFhE6l0ERCD17i1kSz4tHSk_Kla"
//   )

//   const walletProvider = new ethers.providers.JsonRpcProvider(
//     ethereum
//   )

//   const getContractData = new ethers.Contract(
//     contractAddress,
//     contract.abi,
//     alchemyProvider,
//     signer
//   )

//   const sendContractTx = new ethers.Contract(
//     contractAddress,
//     contract.abi,
//     walletProvider
//   )

//   useEffect(() => {
//     ethereum.on("accountsChanged", (accounts) => {
//       setAddress(accounts[0])
//       const getbal = async () => {
//         const balance = await ethereum.request({
//           method: "eth_getBalance",
//           params: [accounts[0], 'latest']
//         })
//         setBalance(ethers.utils.formatEther(balance));
//       }
//       getbal();
//     })
//     ethereum.on("chainChanged", (chain) => {
//       console.log(chain);
//     })
//   })

//   const player = async () => {
//     const data = await getContractData.play();
//     setPlay(data);
//     console.log(data);
//   }

//   const changeChain = async () => {
//     await ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [
//         {
//           chainId: `0xaa36a7`,
//           chainName: "Sepolia Testnet",
//           nativeCurrency: {
//             name: "SEPOLIA",
//             symbol: "ETH",
//             decimals: 18,
//           },
//           rpcUrls: ["https://rpc.sepolia.org"],
//           blockExplorerUrls: ["https://rpc.sepolia.org"]
//         }
//       ]
//     })
//   }

//   const sendTx = async () => {
//     await ethereum.request({
//       method: "eth_sendTransaction",
//       params: [
//         {
//           to: '0xEf657b09Bb40DD929eF04DfbC4905Ca697ecAbaE',
//           from: address,
//           value: `0x${(parseInt(ethers.parseEther('0.02'))).toString(16)}`,
//           chainId: '0x3',
//         }
//       ]
//     })
//   }

//   const requestAccount = async () => {
//     // await ethereum.request({
//     //   method: "wallet_requestPermissions",
//     //   params: [{
//     //     eth_accounts: {}
//     //   }]
//     // });

//     const accounts = await ethereum.request({ method: "eth_requestAccounts" })
//     setAddress(accounts[0]);

//     const balance = await ethereum.request({
//       method: "eth_getBalance",
//       params: [accounts[0], 'latest']
//     })

//     setBalance(ethers.utils.formatEther(balance));
//   }