import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button";
import styled, { css } from "styled-components";
import Popup from "./QuizPopup";
import { useNavigate } from "react-router-dom";
import { CategoryType } from "../../pages/Learn";

const QuizQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const QuizQuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const QuizQuestionDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 10%;
  padding-top: 2rem;
  padding-left: 2rem;
  margin: 0;
`;

const QuizQuestionText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  width: 100%;
  height: 90%;
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
  forLearning?: boolean;
  category?: CategoryType;
  difficulty: string;
  questionNumber: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  nextQuestion: () => void;
  isLoading: boolean;
  resetQuiz?: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  forLearning,
  category,
  difficulty,
  questionNumber,
  question,
  answers,
  correctAnswer,
  nextQuestion,
  isLoading,
  resetQuiz,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [final, setFinal] = useState(false);
  const [showPopupLose, setShowPopupLose] = useState(false);
  const [showPopupWin, setShowPopupWin] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer === answer) {
      setSelectedAnswer("");
      setIsAnswerSelected(false);
      return;
    }
    setSelectedAnswer(answer);
    setIsAnswerSelected(true);
  };

  const checkAnswer = () => {
    setFinal(true);

    if (!forLearning) {
      if (questionNumber === 15 && selectedAnswer === correctAnswer) {
        setShowPopupWin(true);
      }
      if (selectedAnswer !== correctAnswer) {
        setShowPopupLose(true);
      } else {
        setTimeout(() => {
          setFinal(false);
          nextQuestion();
          setIsAnswerSelected(false);
          setSelectedAnswer("");
          setShowPopupLose(false);
        }, 3000);
      }
    } else {
      setTimeout(() => {
        setFinal(false);
        nextQuestion();
        setIsAnswerSelected(false);
        setSelectedAnswer("");
        setShowPopupLose(false);
      }, 3000);
    }
  };

  const navigate = useNavigate();

  const learnMore = () => {
    navigate("/learn");
  };

  const playAgain = () => {
    setShowPopupLose(false);
    navigate("/quiz");
    setFinal(false);
    nextQuestion();
    setIsAnswerSelected(false);
    setSelectedAnswer("");
    resetQuiz && resetQuiz();
  };

  return (
    <>
      {showPopupLose && (
        <Popup
          winner={false}
          playAgain={playAgain}
          learnMore={learnMore}
          score={questionNumber - 1}
        />
      )}

      {showPopupWin && (
        <Popup
          winner={true}
          playAgain={playAgain}
          learnMore={learnMore}
          score={15}
        />
      )}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <QuizQuestionContainer>
            <QuizQuestionTextContainer>
              <QuizQuestionDescription>
                {category && <p>Category: {category}</p>}
                <p>Difficulty: {difficulty}</p>
                <p>Question number: {questionNumber}</p>
              </QuizQuestionDescription>
              <QuizQuestionText>{question}</QuizQuestionText>
            </QuizQuestionTextContainer>
            <QuizQuestionAnswersAndButton>
              <QuizQuestionAnswers>
                {answers.map((answer, index) => (
                  <QuizQuestionAnswer key={index}>
                    <Button
                      onClick={() => handleAnswerSelect(answer)}
                      isSelected={selectedAnswer === answer}
                      isCorrect={correctAnswer === answer}
                      isFinal={final}
                    >
                      {answer}
                    </Button>
                  </QuizQuestionAnswer>
                ))}
              </QuizQuestionAnswers>

              <Button
                onClick={() => {
                  checkAnswer();
                }}
                isDisabled={!isAnswerSelected}
              >
                Check Answer
              </Button>
            </QuizQuestionAnswersAndButton>
          </QuizQuestionContainer>
        </>
      )}
    </>
  );
};

export default QuizQuestion;
