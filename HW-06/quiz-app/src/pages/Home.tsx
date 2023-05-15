import React from "react";
import { styled } from "styled-components";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Home = () => {
  return (
    <HomeDiv>
      <h1>Quiz App</h1>
      <br></br>
      <p>Learn while playing!</p>
      <br></br>
      <p>Test your knowledge with an interactive quiz.</p>
      <br></br>
      <p>Learn new things with our learning section.</p>
      <br></br>
      <p>See how you rank against other players.</p>
    </HomeDiv>
  );
};

export default Home;
