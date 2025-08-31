import { useEffect, useState } from "react";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import GuessInput from "../Utils/guessInput";

import questionMark from "../../../images/players/questionMark.jpg";
import sergioKid from "../../../images/players/kid/sergioKid.jpg";
import covesKid from "../../../images/players/kid/covesKid.jpg";
import albertoKid from "../../../images/players/kid/albertoKid.jpg";
import alvaroKid from "../../../images/players/kid/alvaroKid.jpg";
import mendiKid from "../../../images/players/kid/mendiKid.jpg";
import maikelKid from "../../../images/players/kid/maikelKid.jpg";
import pabloKid from "../../../images/players/kid/pabloKid.jpg";
import ivanKid from "../../../images/players/kid/ivanKid.jpg";
import joseKid from "../../../images/players/kid/joseKid.jpg";

import sergioAdult from "../../../images/players/adult/sergioadult.jpg";
import covesAdult from "../../../images/players/adult/covesadult.jpg";
import albertoAdult from "../../../images/players/adult/albertoadult.jpg";
import alvaroAdult from "../../../images/players/adult/alvaroadult.jpg";
import mendiAdult from "../../../images/players/adult/mendiadult.jpg";
import maikelAdult from "../../../images/players/adult/maikeladult.jpg";
import pabloAdult from "../../../images/players/adult/pabloadult.jpg";
import ivanAdult from "../../../images/players/adult/ivanadult.jpg";
import joseAdult from "../../../images/players/adult/joseadult.jpg";

const questions = [
  {
    image: covesKid,
    answer: "Coves",
    adult: covesAdult,
  },
  {
    image: joseKid,
    answer: "Jose",
    adult: joseAdult,
  },
  {
    image: sergioKid,
    answer: "Sergio",
    adult: sergioAdult,
  },
  {
    image: mendiKid,
    answer: "Mendiola",
    adult: mendiAdult,
  },
  {
    image: alvaroKid,
    answer: "Álvaro",
    adult: alvaroAdult,
  },
  {
    image: pabloKid,
    answer: "Pablo",
    adult: pabloAdult,
  },
  {
    image: ivanKid,
    answer: "Iván",
    adult: ivanAdult,
  },
  {
    image: maikelKid,
    answer: "Maikel",
    adult: maikelAdult,
  },
  {
    image: albertoKid,
    answer: "Alberto",
    adult: albertoAdult,
  },
];

const imageCss = {
  height: 150,
  width: 150,
  minWidth: { xs: 150, md: 150 },
  maxHeight: { xs: 150, md: 150 },
  maxWidth: { xs: 150, md: 150 },
};

export default function GuessKid() {
  const [guessedImage, setGuessedImage] = useState(questionMark);
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [gameEnd, setGameEnd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCorrect) {
      handleGuess();
    }
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      if (currentQuestionIndex === questions.length - 1) {
        setGameEnd(true);
      }
      setGuessedImage(currentQuestion.adult);
      setIsCorrect(true);
    } else {
      setGuessedImage(questionMark);
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setGuess("");
    setIsCorrect(false);
    setGuessedImage(questionMark);
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  return (
    <Box textAlign="center" p={2}>
      <Typography variant="h6" mb={2}>
        ¿Quién es este niño?
      </Typography>
      <Stack
        id="imagesStack"
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDirection={"row"}
        gap={1}
        padding={1}
      >
        <Box component="img" sx={imageCss} src={currentQuestion.image} />
        <Box component="img" sx={imageCss} src={guessedImage} />
      </Stack>
      {gameEnd ? (
        <Typography variant="h4" color="success">
          ¡ENHORABUENA HAS COMPLETADO EL JUEGO!
        </Typography>
      ) : (
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          isCorrect={isCorrect}
          handleSubmit={handleSubmit}
          handleGuess={handleGuess}
          handleNext={handleNext}
        />
      )}
    </Box>
  );
}
