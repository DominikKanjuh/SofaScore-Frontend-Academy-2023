import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Button from "../Button";

const QuizQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const QuizQuestionText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  width: 60%;
  height: 100%;
`;

const QuizQuestionAnswers = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const QuizQuestionAnswersAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

interface QuizQuestionProps {
  question: string;
  answers: string[];
  nextQuestion: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  answers,
  nextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswerSelected(true);
  };

  return (
    <QuizQuestionContainer>
      <QuizQuestionText>{question}</QuizQuestionText>
      <QuizQuestionAnswersAndButton>
        <QuizQuestionAnswers>
          {answers.map((answer, index) => (
            <li key={index}>
              <button
                onClick={() => handleAnswerSelect(answer)}
                style={{
                  backgroundColor:
                    isAnswerSelected && selectedAnswer === answer
                      ? "pink"
                      : "palevioletred",
                }}
                disabled={isAnswerSelected}
              >
                {answer}
              </button>
            </li>
          ))}
        </QuizQuestionAnswers>
        <Button onClick={nextQuestion}>Check Answer</Button>
      </QuizQuestionAnswersAndButton>
    </QuizQuestionContainer>
  );
};

export default QuizQuestion;
