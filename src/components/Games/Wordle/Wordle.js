import React from "react";

import { sample } from "../../../utils";
import { WORDS } from "./data";
import GuessInput from "./GuessInput/GuessInput";
import Banner from "./Banner/Banner";
import Guess from "./Guess/Guess";
import Keyboard from "./Keyboard/Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "./constants";
import { checkGuess } from "./game-helpers";
import { Stack } from "@mui/material";

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Wordle() {
  const [answers, setAnswers] = React.useState([]);
  const [bannerVisible, setBannerVisible] = React.useState(false);
  const [bannerType, setBannerType] = React.useState("sad");
  const [checkedGuess, setCheckedGuess] = React.useState();
  const [trueAnswer, setTrueAnswer] = React.useState(sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState("new");

  console.info({ answer: trueAnswer });

  function handleAddGuess(guess) {
    const checkedGuess = checkGuess(guess, trueAnswer);
    setCheckedGuess(checkedGuess);
    const nextAnswerList = [...answers, checkedGuess];

    setAnswers(nextAnswerList);

    if (guess == trueAnswer) {
      setBannerType("happy");
      setBannerVisible(true);
    } else if (nextAnswerList.length >= NUM_OF_GUESSES_ALLOWED) {
      setBannerVisible(true);
    }
  }

  function handleFinishGame() {
    setAnswers([]);
    setGameStatus("new");
    setBannerVisible(false);
    const newAnswer = sample(WORDS);
    setTrueAnswer(newAnswer);
    console.log(newAnswer);
  }

  function generateGuessRows() {
    const rows = [];
    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
      rows.push(
        <Guess
          key={i}
          possibleGuess={answers[i]}
          numLettersCorrectWord={trueAnswer.length}
        />
      );
    }
    return rows;
  }

  return (
    <Stack>
      {bannerVisible && (
        <Banner
          type={bannerType}
          answer={trueAnswer}
          numGuesses={answers.length}
          handleFinishGame={handleFinishGame}
        />
      )}
      {generateGuessRows()}
      <Keyboard checkedGuess={checkedGuess} gameStatus={gameStatus} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        disabled={bannerVisible}
        setGameStatus={setGameStatus}
        numLettersCorrectWord={trueAnswer.length}
      />
    </Stack>
  );
}

export default Wordle;
