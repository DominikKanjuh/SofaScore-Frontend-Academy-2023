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
    `https://opentdb.com/api.php?amount=1&category=9&difficulty=${difficulty}&type=multiple`;

  const { data, error, isLoading, mutate } = useSWR<QuestionDetailsResponse>(
    currentQuestion <= 5
      ? generateURL("easy")
      : currentQuestion <= 10
      ? generateURL("medium")
      : currentQuestion <= 15
      ? generateURL("hard")
      : null
  );

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
  const allAnswers = shuffleAnswers(correct_answer, incorrect_answers);

  return (
    <QuizQuestion
      difficulty={difficulty}
      questionNumber={currentQuestion}
      question={question}
      answers={allAnswers}
      correctAnswer={correct_answer}
      nextQuestion={getNextQuestion}
      isLoading={isLoading}
    />
  );
};

export default Quiz;
