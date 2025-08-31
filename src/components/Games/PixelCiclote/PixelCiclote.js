import { useEffect, useState } from "react";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import GuessInput from "../Utils/guessInput";

import sergioAdult from "../../../images/players/adult/sergioadult.jpg";
import sergio15 from "../../../images/players/pixel/sergio15.jpg";
import sergio30 from "../../../images/players/pixel/sergio30.jpg";
import sergio50 from "../../../images/players/pixel/sergio50.jpg";

import covesAdult from "../../../images/players/adult/covesadult.jpg";
import coves15 from "../../../images/players/pixel/coves15.jpg";
import coves30 from "../../../images/players/pixel/coves30.jpg";
import coves50 from "../../../images/players/pixel/coves50.jpg";

import albertoAdult from "../../../images/players/adult/albertoadult.jpg";
import alberto15 from "../../../images/players/pixel/alberto15.jpg";
import alberto30 from "../../../images/players/pixel/alberto30.jpg";
import alberto50 from "../../../images/players/pixel/alberto50.jpg";

import alvaroAdult from "../../../images/players/adult/alvaroadult.jpg";
import alvaro15 from "../../../images/players/pixel/alvaro15.jpg";
import alvaro30 from "../../../images/players/pixel/alvaro30.jpg";
import alvaro50 from "../../../images/players/pixel/alvaro50.jpg";

import mendiAdult from "../../../images/players/adult/mendiadult.jpg";
import mendi15 from "../../../images/players/pixel/mendi15.jpg";
import mendi30 from "../../../images/players/pixel/mendi30.jpg";
import mendi50 from "../../../images/players/pixel/mendi50.jpg";

import maikelAdult from "../../../images/players/adult/maikeladult.jpg";
import maikel15 from "../../../images/players/pixel/maikel15.jpg";
import maikel30 from "../../../images/players/pixel/maikel30.jpg";
import maikel50 from "../../../images/players/pixel/maikel50.jpg";

import pabloAdult from "../../../images/players/adult/pabloadult.jpg";
import pablo15 from "../../../images/players/pixel/pablo15.jpg";
import pablo30 from "../../../images/players/pixel/pablo30.jpg";
import pablo50 from "../../../images/players/pixel/pablo50.jpg";

import ivanAdult from "../../../images/players/adult/ivanadult.jpg";
import ivan15 from "../../../images/players/pixel/ivan15.jpg";
import ivan30 from "../../../images/players/pixel/ivan30.jpg";
import ivan50 from "../../../images/players/pixel/ivan50.jpg";

import joseAdult from "../../../images/players/adult/joseadult.jpg";
import jose15 from "../../../images/players/pixel/jose15.jpg";
import jose30 from "../../../images/players/pixel/jose30.jpg";
import jose50 from "../../../images/players/pixel/jose50.jpg";

const questions = [
  {
    answer: "Sergio",
    image: sergioAdult,
    image15: sergio15,
    image30: sergio30,
    image50: sergio50,
  },
  {
    answer: "Coves",
    image: covesAdult,
    image15: coves15,
    image30: coves30,
    image50: coves50,
  },
  {
    answer: "Alberto",
    image: albertoAdult,
    image15: alberto15,
    image30: alberto30,
    image50: alberto50,
  },
  {
    answer: "Álvaro",
    image: alvaroAdult,
    image15: alvaro15,
    image30: alvaro30,
    image50: alvaro50,
  },
  {
    answer: "Mendiola",
    image: mendiAdult,
    image15: mendi15,
    image30: mendi30,
    image50: mendi50,
  },
  {
    answer: "Maikel",
    image: maikelAdult,
    image15: maikel15,
    image30: maikel30,
    image50: maikel50,
  },
  {
    answer: "Pablo",
    image: pabloAdult,
    image15: pablo15,
    image30: pablo30,
    image50: pablo50,
  },
  {
    answer: "Iván",
    image: ivanAdult,
    image15: ivan15,
    image30: ivan30,
    image50: ivan50,
  },
  {
    answer: "Jose",
    image: joseAdult,
    image15: jose15,
    image30: jose30,
    image50: jose50,
  },
];

const imageCss = {
  height: 250,
  width: 250,
  minWidth: { xs: 250, md: 250 },
  maxHeight: { xs: 250, md: 250 },
  maxWidth: { xs: 250, md: 250 },
};

export default function PixelCiclote() {
  const [guess, setGuess] = useState("");
  const [gameEnd, setGameEnd] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [src, setSrc] = useState(currentQuestion.image50);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCorrect) {
      handleNext();
    }
    if (guess !== "") {
      if (!isCorrect) {
        handleGuess();
      }
    }
  };

  const handleGuess = () => {
    if (guess != "") {
      if (guess.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        if (currentQuestionIndex === questions.length - 1) {
          setGameEnd(true);
          return;
        }
        setSrc(currentQuestion.image);
        setIsCorrect(true);
        setNumberOfGuesses(0);
        if (currentQuestionIndex === questions.length - 1) {
          setGameEnd(true);
        }
      } else {
        setIsCorrect(false);
        setNumberOfGuesses((prev) => prev + 1);
      }
      setGuess("");
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setGuess("");
    setIsCorrect(false);
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  useEffect(() => {
    setSrc(currentQuestion.image50);
  }, [currentQuestion]);

  useEffect(() => {
    if (isCorrect) setSrc(currentQuestion.image);
    else {
      switch (numberOfGuesses) {
        case 0:
          setSrc(currentQuestion.image50);
          break;
        case 1:
          setSrc(currentQuestion.image30);
          break;
        case 2:
          setSrc(currentQuestion.image15);
          break;
        default:
          setSrc(currentQuestion.image);
      }
    }
  }, [numberOfGuesses]);
  return (
    <Box textAlign="center" p={2}>
      <Typography variant="h6" mb={2}>
        ¿Quién es este ciclote?
      </Typography>
      <Stack
        id="imagesStack"
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDirection={"row"}
        gap={5}
        padding={2}
      >
        <Box component="img" sx={imageCss} src={src} />
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
