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
  list-style: none;
  padding: 0;
  margin: 0;
`;

const QuizQuestionAnswersAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 40%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const QuizQuestionAnswer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 1rem;
  margin: 0;
`;

interface QuizQuestionProps {
  question: string;
  answers: string[];
  nextQuestion: () => void;
  isLoading: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  answers,
  nextQuestion,
  isLoading,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer === answer) {
      setSelectedAnswer("");
      setIsAnswerSelected(false);
      return;
    }

    setSelectedAnswer(answer);
    setIsAnswerSelected(true);
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <QuizQuestionContainer>
          <QuizQuestionText>{question}</QuizQuestionText>
          <QuizQuestionAnswersAndButton>
            <QuizQuestionAnswers>
              {answers.map((answer, index) => (
                <QuizQuestionAnswer key={index}>
                  <Button
                    onClick={() => handleAnswerSelect(answer)}
                    isSelected={selectedAnswer === answer}
                  >
                    {answer}
                  </Button>
                </QuizQuestionAnswer>
              ))}
            </QuizQuestionAnswers>
            <Button
              onClick={() => {
                setIsAnswerSelected(false);
                setSelectedAnswer("");
                nextQuestion();
              }}
              isDisabled={!isAnswerSelected}
            >
              Check Answer
            </Button>
          </QuizQuestionAnswersAndButton>
        </QuizQuestionContainer>
      )}
    </>
  );
};

export default QuizQuestion;
