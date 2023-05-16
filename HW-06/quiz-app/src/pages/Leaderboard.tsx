import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeaderboardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 300px;
  border-bottom: 1px solid #ccc;
`;

const LeaderboardName = styled.span`
  font-weight: bold;
`;

const LeaderboardScore = styled.span`
  color: pink;
`;

interface PlayerOnTheLeaderboard {
  name: string;
  score: number;
}

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<PlayerOnTheLeaderboard[]>([]);

  useEffect(() => {
    const leaderboardData = localStorage.getItem("leaderboard");
    const sortedLeaderboard = leaderboardData
      ? JSON.parse(leaderboardData).sort(
          (a: PlayerOnTheLeaderboard, b: PlayerOnTheLeaderboard) =>
            b.score - a.score
        )
      : [];
    setLeaderboard(sortedLeaderboard);
  }, []);

  return (
    <LeaderboardContainer>
      <h2>Leaderboard</h2>
      {leaderboard.length > 0 ? (
        leaderboard.map((player, index) => (
          <LeaderboardItem key={index}>
            <LeaderboardName>{player.name}</LeaderboardName>
            <LeaderboardScore>{player.score}</LeaderboardScore>
          </LeaderboardItem>
        ))
      ) : (
        <p>No scores found in the leaderboard.</p>
      )}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
