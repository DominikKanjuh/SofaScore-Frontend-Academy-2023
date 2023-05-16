import React, { useState } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
`;

const PopupText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ScoreInput = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PopupButton = styled.button`
  background-color: pink;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  width: 30%;

  &:hover {
    background-color: white;
    color: pink;
  }
`;

interface PopupProps {
  playAgain: () => void;
  learnMore: () => void;
  score: number;
}

const Popup: React.FC<PopupProps> = ({ playAgain, learnMore, score }) => {
  const [playerName, setPlayerName] = useState("");

  const handleScoreInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlayerName(event.target.value);
  };

  const addScoreToLeaderboard = () => {
    const leaderboardData = localStorage.getItem("leaderboard");
    const leaderboard = leaderboardData ? JSON.parse(leaderboardData) : [];

    leaderboard.push({ name: playerName, score: score });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  };

  return (
    <PopupContainer>
      <PopupContent>
        <PopupText>
          Sorry, you lost! You can add your score to the leaderboard if you
          want...
        </PopupText>
        <PopupText>Your score: {score}</PopupText>
        <ScoreInput
          type="text"
          value={playerName}
          onChange={handleScoreInputChange}
          placeholder="Enter your name..."
        />

        <PopupButtonContainer>
          <PopupButton onClick={addScoreToLeaderboard}>Add</PopupButton>
          <PopupButton onClick={learnMore}>Learn!</PopupButton>
          <PopupButton onClick={playAgain}>Play Again</PopupButton>
        </PopupButtonContainer>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
