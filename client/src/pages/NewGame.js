import contracts from '../RPSLS.sol/RPSLSFinal.json'
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage.ts'
import { useAccount, useContractWrite, useSignMessage } from 'wagmi';
import { Address, Hash, encodePacked, keccak256, parseEther } from 'viem';
import { AppContext } from '../Acontext/Appcontext.tsx';
import { Move, movesIcons, moves } from '../moves'
import { Home } from './Home'

export const NewGame = () => {
    const location = useLocation();
    const [player2, setPlayer2] = useState('')
    const [bid, setBid] = useState('')
    const [, setSalt] = useLocalStorage('salt');
    const [, setMove1] = useLocalStorage('move');
    const [selectedMove, setSelectedMove] = useState(Move.Null)
    const [isMoveCommitted, setIsMoveCommitted] = useState(false);
    const navigate = useNavigate();

    const account = location.state?.account;
    // const {
    //     error,
    //     isLoading: isNewGameSessionLoading,
    //     write: createNewGameSession,
    //     data: createNewGameSessionData,
    //   } = useContractWrite({
    //     ...contracts.factory,
    //     functionName: 'createGameSession',
    //     value: parseEther(bid),
    //   });

    // eslint-disable-next-line
    // const _salt = useRef();

    // // eslint-disable-next-line
    // const _move1Hash = useRef();

    // const { signMessage, data: signData } = useSignMessage();

    // useEffect(() => {
    //     if (createNewGameSessionData && createNewGameSessionData.hash && !error) {
    //         setIsMoveCommitted(true);
    //     }
    // }, [createNewGameSessionData && createNewGameSessionData.hash, error]);

    // const [gameSessionHash, setGameSessionHash] = useState();

    // useEffect(() => {
    //     if (!createNewGameSessionData && signData && _move1Hash.current && player2) {
    //         createNewGameSession({
    //             args: [_move1Hash.current, player2],
    //         });
    //     }
    // }, [createNewGameSessionData, signData, _move1Hash.current, player2]);

    // useEffect(() => {
    //     if (gameSessionHash && _salt.current) {
    //         setSalt(_salt.current, `salt-${gameSessionHash}`);
    //         setMove1(String(selectedMove), `move-${gameSessionHash}`);
    //     }
    // }, [gameSessionHash, selectedMove]);

    // const { setErrorMessage, setIsLoading } = useContext(AppContext);

    // useEffect(() => {
    //     if (error && error.message) {
    //         setErrorMessage && setErrorMessage(error.message);
    //     }
    // }, [error && error.message]);

    // useEffect(() => {
    //     setIsLoading && setIsLoading(isNewGameSessionLoading);
    // }, [isNewGameSessionLoading]);


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleMoveSelection = (move) => {
        setSelectedMove(move);
    };

    const handleClick = () => {
        // const salt = crypto.randomUUID();

        // _move1Hash.current = keccak256(
        //   encodePacked(['uint8', 'string'], [selectedMove, salt]),
        // );

        // _salt.current = salt;

        // signMessage({
        //   message: `Your game move is: ${selectedMove}. Your game salt is: ${_salt.current}. Keep it private! It'll automatically be stored in your local storage.`,
        // });
        navigate('/gamesession')
    }

    return (
        <>
            <p className='account' style={{ color: 'black' }}> Account : {account ? account : "Not connected"}</p>
            <div>
                <h2>Player 1 Selection</h2>
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    {moves.map((move, index) => (
                        <div key={move} style={{ backgroundColor: selectedMove === move ? "#333" : "#fff", padding: "10px" }}>
                            <img
                                src={movesIcons[index]}
                                alt={move}
                                style={{ cursor: 'pointer', height: "250px", width: "250px" }}
                                onClick={() => handleMoveSelection(move)}
                            />
                            <p style={{ color: selectedMove === move ? "#fff" : "#000" }}>{move}</p>
                        </div>
                    ))}
                </div>
                <p>Selected Move: {selectedMove}</p>
            </div>
            <form className='details' onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
                <div className='player2Adrs'>
                    <label for="name">Player 2's Address:</label>
                    <input value={player2} type="text" id="name" name="name" onChange={(e) => setPlayer2(e.target.value)} placeholder="Enter your address"></input>
                </div>
                <div className='bid'>
                    <label>Please enter the bid for the game:</label>
                    <input value={bid} type='number' id='bid' name='bidforgame' onChange={(e) => setBid(e.target.value)} placeholder='bid for the game'></input>
                </div>
                <button type='submit' onClick={handleClick}>Submit</button>
            </form>
        </>
    )
}