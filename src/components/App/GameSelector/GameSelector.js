import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GameCard from "./GameCard/GameCard";

import wordleImg from "../../../images/games/wordle.jpg";
import pyramidImg from "../../../images/games/pyramid.jpg";
import impostorImg from "../../../images/games/impostor.jpg";
import legacyImg from "../../../images/games/legacy.jpg";
import guessTheKidImg from "../../../images/players/kid/covesKid.jpg";
import pixelCicloteImg from "../../../images/players/pixel/coves50.jpg";

const games = [
  {
    title: "Guess the kid",
    description: "¿Quién es este niño?",
    imagesrc: guessTheKidImg,
    to: "/guessKid",
  },
  {
    title: "Pixel ciclote",
    description: "¿Quién es este ciclote?",
    imagesrc: pixelCicloteImg,
    to: "/pixelCiclote",
  },
  {
    title: "Wordle",
    description: "¡Adivina el jugador!",
    imagesrc: wordleImg,
    to: "/wordle",
  },
  {
    title: "Pyramid",
    description: "¡Ordena los ciclotes!",
    imagesrc: pyramidImg,
    to: "/pyramid",
  },
  {
    title: "Impostor",
    description: "¡Descubre al impostor!",
    imagesrc: impostorImg,
    to: "/impostor",
  },
  {
    title: "Legacy",
    description: "¡Encuentra al jugador!",
    imagesrc: legacyImg,
    to: "/legacy",
  },
];

export default function GameSelector() {
  return (
    <Box
      sx={{
        padding: 5,
        flex: 1,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 5,
        }}
      >
        {games.map((g) => (
          <Grid item key={g.title}>
            <GameCard {...g} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
