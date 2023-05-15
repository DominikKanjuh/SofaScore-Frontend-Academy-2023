import React from "react";
import Button from "../Button";
import styled from "styled-components";

const QuizIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type QuizIntroProps = {
  startQuiz: () => void;
};

const QuizIntro: React.FC<QuizIntroProps> = ({ startQuiz }) => {
  return (
    <QuizIntroContainer>
      <p>This quiz consists of 15 questions.</p>
      <br></br>
      <p>They are in order: 5 easy, 5 medium, and 5 hard questions.</p>
      <br></br>
      <p>The quiz is general knowledge.</p>
      <br></br>
      <p>When you are ready, press "Start".</p>
      <br></br>
      <Button onClick={startQuiz}>Start</Button>
    </QuizIntroContainer>
  );
};

export default QuizIntro;
