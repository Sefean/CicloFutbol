import { useEffect, useState } from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import GuessInput from "../Utils/guessInput";

import questionMark from "../../../images/players/questionMark.jpg";
import ivanAdult from "../../../images/players/adult/ivanadult.jpg";
import joseAdult from "../../../images/players/adult/joseadult.jpg";
import mendiAdult from "../../../images/players/adult/mendiadult.jpg";
import albertoAdult from "../../../images/players/adult/albertoAdult.jpg";
import ezImg from "../../../images/players/adult/ezImg.jpg";

import intangcoImg from "../../../images/teams/intangco.jpg";
import zafiroImg from "../../../images/teams/zafiro.jpg";
import cosmeticos24h from "../../../images/teams/cosmeticos24h.jpg";
import torrellano from "../../../images/teams/torrellano.jpg";
import benferriImg from "../../../images/teams/benferri.jpg";
import pabloIglesiasImg from "../../../images/teams/pabloIglesias.jpg";
import kelmeImg from "../../../images/teams/kelme.jpg";
import montesinosImg from "../../../images/teams/montesinos.jpg";
import carcelImg from "../../../images/teams/carcel.jpg";
import ravalImg from "../../../images/teams/raval.jpg";
import elcheImg from "../../../images/teams/elche.jpg";
import barcelonaImg from "../../../images/teams/barcelona.jpg";
import betisImg from "../../../images/teams/betis.jpg";

const questions = [
  {
    player: "Ivan",
    playerImg: ivanAdult,
    team1: "Intangco",
    team1Img: intangcoImg,
    team2: "Zafiro",
    team2Img: zafiroImg,
    team3: "Cosmeticos24",
    team3Img: cosmeticos24h,
    team4: "Ath Torrellano",
    team4Img: torrellano,
  },
  {
    player: "Jose",
    playerImg: joseAdult,
    team1: "Zafiro",
    team1Img: zafiroImg,
    team2: "Intangco",
    team2Img: intangcoImg,
    team3: "Pablo Iglesias",
    team3Img: pabloIglesiasImg,
    team4: "Benferri",
    team4Img: benferriImg,
  },
  {
    player: "Mendiola",
    playerImg: mendiAdult,
    team1: "Intangco",
    team1Img: intangcoImg,
    team2: "Kelme",
    team2Img: kelmeImg,
    team3: "Cosmeticos24",
    team3Img: cosmeticos24h,
    team4: "Montesinos",
    team4Img: montesinosImg,
  },
  {
    player: "Alberto",
    playerImg: albertoAdult,
    team1: "Cosmeticos24",
    team1Img: cosmeticos24h,
    team2: "Intangco",
    team2Img: intangcoImg,
    team3: "Kelme",
    team3Img: kelmeImg,
    team4: "Carcel Castellón",
    team4Img: carcelImg,
  },
  {
    player: "Ez Abde",
    playerImg: ezImg,
    team1: "Penya Raval",
    team1Img: ravalImg,
    team2: "Elche",
    team2Img: elcheImg,
    team3: "Betis",
    team3Img: betisImg,
    team4: "Barcelona",
    team4Img: barcelonaImg,
  },
];

const imageCss = {
  height: 125,
  width: 125,
  minWidth: { xs: 125, md: 125 },
  maxHeight: { xs: 125, md: 125 },
  maxWidth: { xs: 125, md: 125 },
};

export default function Legacy() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [tries, setTries] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCorrect) {
      handleGuess();
    }
  };

  const handleGuess = () => {
    // Helper to remove accents
    const normalize = (str) => {
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    };

    if (
      normalize(guess) === normalize(questions[currentQuestionIndex].player)
    ) {
      setIsCorrect(true);
      if (currentQuestionIndex === questions.length - 1) {
        setGameEnd(true);
      }
    } else {
      setIsCorrect(false);
      setTries(tries + 1);
      setGuess("");
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setGuess("");
    setIsCorrect(false);
    setTries(0);
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  function TeamBox({ src, text }) {
    return (
      <Box
        flex={1}
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box component="img" sx={imageCss} src={src} />
        {text}
      </Box>
    );
  }

  function QuestionBox() {
    return (
      <Box
        flex={1}
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box component="img" sx={imageCss} src={questionMark} />
        <Typography variant="body1" sx={{ visibility: "hidden" }}>
          ?
        </Typography>
      </Box>
    );
  }

  return (
    <Box textAlign="center" p={2}>
      <Stack
        id="playerStack"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <TeamBox
          id="player"
          src={
            isCorrect ? questions[currentQuestionIndex].playerImg : questionMark
          }
          text={isCorrect ?? questions[currentQuestionIndex].player}
        />
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack
        id="teamsStack"
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={0}
        justifyContent="center"
        flexWrap="wrap"
      >
        <TeamBox
          id="team1"
          src={questions[currentQuestionIndex].team1Img}
          text={questions[currentQuestionIndex].team1}
        />
        {tries >= 1 ? (
          <TeamBox
            id="team2"
            src={questions[currentQuestionIndex].team2Img}
            text={questions[currentQuestionIndex].team2}
          />
        ) : (
          <QuestionBox />
        )}
        {tries >= 2 ? (
          <TeamBox
            id="team3"
            src={questions[currentQuestionIndex].team3Img}
            text={questions[currentQuestionIndex].team3}
          />
        ) : (
          <QuestionBox />
        )}
        {tries >= 3 ? (
          <TeamBox
            id="team4"
            src={questions[currentQuestionIndex].team4Img}
            text={questions[currentQuestionIndex].team4}
          />
        ) : (
          <QuestionBox />
        )}
      </Stack>
      <Stack>
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
      </Stack>
    </Box>
  );
}
