import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

import sergioAdult from "../../../images/players/adult/sergioadult.jpg";
import covesAdult from "../../../images/players/adult/covesadult.jpg";
import albertoAdult from "../../../images/players/adult/albertoadult.jpg";
import alvaroAdult from "../../../images/players/adult/alvaroadult.jpg";
import mendiAdult from "../../../images/players/adult/mendiadult.jpg";
import maikelAdult from "../../../images/players/adult/maikeladult.jpg";
import pabloAdult from "../../../images/players/adult/pabloadult.jpg";
import ivanAdult from "../../../images/players/adult/ivanadult.jpg";
import joseAdult from "../../../images/players/adult/joseadult.jpg";

const impostors = [
  {
    title: "Jugó en el DMB PUMPS",
    players: [
      { id: 1, name: "IVÁN", impostor: true, image: ivanAdult },
      { id: 2, name: "SERGIO", impostor: false, image: sergioAdult },
      { id: 3, name: "MAIKEL", impostor: false, image: maikelAdult },
      { id: 4, name: "ÁLVARO", impostor: true, image: alvaroAdult },
      { id: 5, name: "PABLO", impostor: false, image: pabloAdult },
      { id: 6, name: "JOSE", impostor: false, image: joseAdult },
      { id: 7, name: "COVES", impostor: false, image: covesAdult },
      { id: 8, name: "MENDIOLA", impostor: false, image: mendiAdult },
      { id: 9, name: "ALBERTO", impostor: true, image: albertoAdult },
    ],
  },
  {
    title: "Ha sido expulsado alguna vez",
    players: [
      { id: 1, name: "PABLO", impostor: false, image: pabloAdult },
      { id: 2, name: "ALBERTO", impostor: false, image: albertoAdult },
      { id: 3, name: "SERGIO", impostor: true, image: sergioAdult },
      { id: 4, name: "IVÁN", impostor: false, image: ivanAdult },
      { id: 5, name: "ÁLVARO", impostor: true, image: alvaroAdult },
      { id: 6, name: "JOSE", impostor: false, image: joseAdult },
      { id: 7, name: "MAIKEL", impostor: false, image: maikelAdult },
      { id: 8, name: "COVES", impostor: false, image: covesAdult },
      { id: 9, name: "MENDIOLA", impostor: true, image: mendiAdult },
    ],
  },
];

const randomGame = impostors[Math.floor(Math.random() * impostors.length)];

const shuffledPlayers = [...randomGame.players].sort(() => Math.random() - 0.5);

export default function Impostor() {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    if (!selected || checked[selected.id] || gameOver) return;

    if (selected.impostor) {
      setChecked((prev) => ({ ...prev, [selected.id]: "wrong" }));
      setMessage("❌ ¡Has perdido! Era un impostor.");
      setGameOver(true);
    } else {
      const newChecked = { ...checked, [selected.id]: "correct" };
      setChecked(newChecked);

      const nonImpostors = randomGame.players.filter((p) => !p.impostor).length;
      const corrects = Object.values(newChecked).filter(
        (v) => v === "correct"
      ).length;

      if (corrects === nonImpostors) {
        setMessage("🎉 ¡Has ganado! Todos los impostores evitados.");
        setGameOver(true);
      }
    }

    setSelected(null);
  };

  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h5" gutterBottom>
        {randomGame.title}
      </Typography>

      <Grid container spacing={2} sx={{ maxWidth: 400, margin: "0 auto" }}>
        {shuffledPlayers.map((player) => {
          const status = checked[player.id];
          return (
            <Grid key={player.id} size={4}>
              <Box
                component="img"
                src={player.image}
                onClick={() =>
                  !checked[player.id] && !gameOver && setSelected(player)
                }
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "5px solid",
                  borderRadius: 2,
                  cursor:
                    !checked[player.id] && !gameOver ? "pointer" : "default",
                  borderColor:
                    selected?.id === player.id
                      ? "blue"
                      : status === "correct"
                      ? "green"
                      : status === "wrong"
                      ? "red"
                      : "grey.400",
                  color: status ? "white" : "black",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                  width: 150,
                  height: 150,
                }}
              />
            </Grid>
          );
        })}
      </Grid>

      {!gameOver && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleCheck}
        >
          Comprobar
        </Button>
      )}

      {message && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
}
