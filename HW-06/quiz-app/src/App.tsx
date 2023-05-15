import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import QuizPage from "./QuizPage";
import LearnPage from "./LearnPage";
import LeaderboardPage from "./LeaderboardPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </>
  );
};

export default App;
