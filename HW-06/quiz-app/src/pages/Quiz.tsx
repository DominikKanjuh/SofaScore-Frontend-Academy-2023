import React, { useState } from "react";
import QuizIntro from "../components/quiz/QuizIntro";
import useSWR from "swr";
import QuizQuestion from "../components/quiz/QuizQuestion";

interface QuestionDetailsResponse {
  response_code: number;
  results: QuestionDetails[];
}

interface QuestionDetails {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
}

const Quiz = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const generateURL = (difficulty: string) =>
    `https://opentdb.com/api.php?amount=1&category=9&difficulty=${difficulty}&type=multiple&encode=base64`;

  const { data, error, isLoading, mutate } = useSWR<QuestionDetailsResponse>(
    currentQuestion <= 5
      ? generateURL("easy")
      : currentQuestion <= 10
      ? generateURL("medium")
      : currentQuestion <= 15
      ? generateURL("hard")
      : null
  );

  const decodeBase64 = (data: string) => {
    const decodedString = window.atob(data);
    return decodedString;
  };

  const shuffleAnswers = (
    correctAnswer: string,
    incorrectAnswers: string[]
  ) => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];

    const shuffledAnswers = [...allAnswers];

    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [
        shuffledAnswers[j],
        shuffledAnswers[i],
      ];
    }

    return shuffledAnswers;
  };

  const getNextQuestion = async () => {
    await mutate();
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const resetQuiz = () => {
    setStartQuiz(false);
    setCurrentQuestion(0);
  };

  if (!startQuiz) {
    return <QuizIntro startQuiz={() => setStartQuiz(true)} />;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <div>Error loading question.</div>;
  }

  const { difficulty, question, correct_answer, incorrect_answers } =
    data!.results[0];
  const decodedDifficulty = decodeBase64(difficulty);
  const decodedQuestion = decodeBase64(question);
  const decodedCorrectAnswer = decodeBase64(correct_answer);
  const decodedIncorrectAnswers = incorrect_answers.map((answer) =>
    decodeBase64(answer)
  );
  const allAnswers = shuffleAnswers(
    decodedCorrectAnswer,
    decodedIncorrectAnswers
  );

  return (
    <QuizQuestion
      difficulty={decodedDifficulty}
      questionNumber={currentQuestion}
      question={decodedQuestion}
      answers={allAnswers}
      correctAnswer={decodedCorrectAnswer}
      nextQuestion={getNextQuestion}
      isLoading={isLoading}
      resetQuiz={resetQuiz}
    />
  );
};

export default Quiz;
