import React, { useState } from "react";
import QuizIntro from "../components/quiz/QuizIntro";

const Quiz = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  if (!startQuiz) {
    return <QuizIntro onStartQuiz={() => setStartQuiz(true)} />;
  }

  return <div>Render question 1 here</div>;
};

export default Quiz;
