import React, { useState } from "react";
import LearnIntro from "../components/learn/LearnIntro";
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

export const categories = {
  "General knowledge": 9,
  "Entertainment: Books": 10,
  "Entertainment: Film": 11,
  "Entertainment: Music": 12,
  "Entertainment: Musicals & Theatres": 13,
  "Entertainment: Television": 14,
  "Entertainment: Video Games": 15,
  "Entertainment: Board Games": 16,
  "Science & Nature": 17,
  "Science: Computers": 18,
  "Science: Mathematics": 19,
  Mythology: 20,
  Sports: 21,
  Geography: 22,
  History: 23,
  Politics: 24,
  Art: 25,
  Celebrities: 26,
  Animals: 27,
  Vehicles: 28,
  "Entertainment: Comics": 29,
  "Science: Gadgets": 30,
  "Entertainment: Japanese Anime & Manga": 31,
  "Entertainment: Cartoon & Animations": 32,
};

export type CategoryType = keyof typeof categories;

const Learn = () => {
  const [startLearning, setStartLearning] = useState(false);
  const [categoryType, setCategoryType] =
    useState<CategoryType>("General knowledge");
  const [difficultyType, setDifficultyType] = useState("easy");
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const generateURL = (difficulty: string, category: CategoryType) =>
    `https://opentdb.com/api.php?amount=1&category=9&difficulty=${difficulty}&type=multiple`;

  const { data, error, isLoading, mutate } = useSWR<QuestionDetailsResponse>(
    generateURL(difficultyType, categoryType)
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

  const resetQuiz = () => {
    setStartLearning(false);
    setCurrentQuestion(0);
  };

  if (!startLearning) {
    return (
      <LearnIntro
        startLearning={() => setStartLearning(true)}
        categoryType={categoryType}
        setCategoryType={setCategoryType}
        difficultyType={difficultyType}
        setDifficultyType={setDifficultyType}
      />
    );
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
      resetQuiz={resetQuiz}
    />
  );
};

export default Learn;
