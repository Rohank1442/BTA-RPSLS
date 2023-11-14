import { createContext, useContext, useEffect, useState } from "react";
import contractS from '.././RPSLS.sol/RPSLSFinal.json'
import { useNavigate } from "react-router";


const ContractContext = createContext();

const { ethers, JsonRpcProvider } = require('ethers');
const ContractProvider = (({ children }) => {
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const loadProvider = async () => {
            if (provider) {
                window.ethereum.on("chainChanged", () => {
                    window.location.reload();
                });

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });
                await provider.send("eth_requestAccounts", []);
                // Signer helps to write data on the blockchain
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAccount(address);
                let contractAddress = "0x3d791aebF11D469DC1604eb8c028E7885845fEBf";

                const alchemyProvider = new ethers.providers.JsonRpcProvider(
                    "https://eth-sepolia.g.alchemy.com/v2/7aCctjFhE6l0ERCD17i1kSz4tHSk_Kla"
                )

                const getContractData = new ethers.Contract(
                    contractAddress,
                    contractS.abi,
                    signer,
                    alchemyProvider
                );
                setContract(getContractData)
                setProvider(provider)
            }
            else {
                console.log("Metamask is not installed");
            }
        };
        provider && loadProvider()
    }, [navigate])
    return <ContractContext.Provider value={{ account, setAccount, contract }}>{children}</ContractContext.Provider>
})

export const ContractState = () => {
    return useContext(ContractContext);
}

export default ContractProvider;