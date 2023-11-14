import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { moves, movesIcons } from '../moves'; // Adjust the path as needed

export const GameSession = () => {
  const [selectedMove, setSelectedMove] = useState(null);
  const navigate = useNavigate();

  const handleMoveSelection = (move) => {
    setSelectedMove(move);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result');
  };

  return (
    <div>
      <h2>Player 2 Selection</h2>
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
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Move</button>
      </form>
    </div>
  );
}
