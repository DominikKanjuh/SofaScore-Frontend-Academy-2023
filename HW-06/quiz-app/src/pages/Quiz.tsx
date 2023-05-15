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
}

const Quiz = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const { data, error, isLoading, mutate } = useSWR<QuestionDetailsResponse>(
    `https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple`
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
    mutate();
  };

  if (!startQuiz) {
    return <QuizIntro startQuiz={() => setStartQuiz(true)} />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading question.</div>;
  }

  const { question, correct_answer, incorrect_answers } = data!.results[0];
  const allAnswers = shuffleAnswers(correct_answer, incorrect_answers);

  return (
    <QuizQuestion
      question={question}
      answers={allAnswers}
      nextQuestion={getNextQuestion}
    />
  );
};

export default Quiz;
