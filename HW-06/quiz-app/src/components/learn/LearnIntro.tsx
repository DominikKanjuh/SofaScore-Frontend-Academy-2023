import React from "react";
import Button from "../Button";
import styled, { css } from "styled-components";
import { CategoryType } from "../../pages/Learn";
import { categories } from "../../pages/Learn";
import { difficulties } from "../../pages/Learn";

const LearnIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CategoryButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  gap: 5rem;
  height: auto;
`;

const CategoryButton = styled.button<{ isSelected: boolean }>`
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  background-color: pink;
  &:hover {
    background-color: white;
    color: pink;
  }
  width: 100%;
  height: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: purple;
      color: white;

      &:hover {
        background-color: purple;
        color: white;
      }
    `}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 0.25rem;
`;

type LearnIntroProps = {
  startLearning: () => void;
  difficultyType: string;
  setDifficultyType: (difficulty: string) => void;
  categoryType: CategoryType;
  setCategoryType: (category: CategoryType) => void;
};

const LearnIntro: React.FC<LearnIntroProps> = ({
  startLearning,
  difficultyType,
  setDifficultyType,
  categoryType,
  setCategoryType,
}) => {
  const [choosingCategory, setChoosingCategory] = React.useState(true);
  const [choosingDifficulty, setChoosingDifficulty] = React.useState(false);

  const categoryKeys = Object.keys(categories);
  const halfLength = Math.ceil(categoryKeys.length / 2);
  const firstHalf = categoryKeys.slice(0, halfLength);
  const secondHalf = categoryKeys.slice(halfLength);

  const handleCategoryClick = (category: CategoryType) => {
    setCategoryType(category);
  };

  const handleDifficultyClick = (difficulty: string) => {
    setDifficultyType(difficulty);
  };

  if (choosingCategory) {
    return (
      <LearnIntroContainer>
        <p>Choose one category you want to learn more about:</p>
        <br />
        <CategoryButtonContainer>
          <Column>
            {firstHalf.map((category) => (
              <CategoryButton
                key={category}
                onClick={() => handleCategoryClick(category as CategoryType)}
                isSelected={categoryType === category}
              >
                {category}
              </CategoryButton>
            ))}
          </Column>
          <Column>
            {secondHalf.map((category) => (
              <CategoryButton
                key={category}
                onClick={() => handleCategoryClick(category as CategoryType)}
                isSelected={categoryType === category}
              >
                {category}
              </CategoryButton>
            ))}
          </Column>
        </CategoryButtonContainer>
        <br />
        <Button
          onClick={() => {
            setChoosingCategory(false);
            setChoosingDifficulty(true);
          }}
        >
          Choose the category
        </Button>
      </LearnIntroContainer>
    );
  }
  if (choosingDifficulty) {
    return (
      <LearnIntroContainer>
        <p>Choose the difficulty for category: {categoryType}</p>
        <br />
        <CategoryButtonContainer>
          <Column>
            {difficulties.map((difficulty) => (
              <CategoryButton
                key={difficulty}
                onClick={() => handleDifficultyClick(difficulty)}
                isSelected={difficultyType === difficulty}
              >
                {difficulty}
              </CategoryButton>
            ))}
          </Column>
        </CategoryButtonContainer>
        <br />
        <Button
          onClick={() => {
            setChoosingDifficulty(false);
            startLearning();
          }}
        >
          Choose the difficulty
        </Button>
      </LearnIntroContainer>
    );
  }

  return <div>Idu pitanja</div>;
};

export default LearnIntro;
