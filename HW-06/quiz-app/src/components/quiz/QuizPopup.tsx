import React from "react";
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

  &:hover {
    background-color: white;
    color: pink;
  }
`;

interface PopupProps {
  playAgain: () => void;
  learnMore: () => void;
}

const Popup: React.FC<PopupProps> = ({ playAgain, learnMore }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <PopupText>Sorry, you lost!</PopupText>
        <PopupButtonContainer>
          <PopupButton onClick={learnMore}>Learn!</PopupButton>
          <PopupButton onClick={playAgain}>Play Again</PopupButton>
        </PopupButtonContainer>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
