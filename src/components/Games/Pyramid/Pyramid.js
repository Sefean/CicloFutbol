import React, { useState, useMemo } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

const pyramids = [
  {
    title: "Más mayores",
    players: [
      { id: 1, name: "PJ", order: 1 },
      { id: 2, name: "IVÁN", order: 2 },
      { id: 3, name: "MAIKEL", order: 3 },
      { id: 4, name: "PABLO", order: 4 },
      { id: 5, name: "ALBERTO", order: 5 },
      { id: 6, name: "MENDIOLA", order: 6 },
      { id: 7, name: "JOSE", order: 7 },
      { id: 8, name: "SERGIO", order: 8 },
      { id: 9, name: "ÁLVARO", order: 9 },
      { id: 10, name: "COVES", order: 10 },
    ],
  },
  {
    title: "Más altos",
    players: [
      { id: 1, name: "PABLO", order: 1 },
      { id: 2, name: "MAIKEL", order: 2 },
      { id: 3, name: "JOSE", order: 3 },
      { id: 4, name: "ALBERTO", order: 4 },
      { id: 5, name: "ÁLVARO", order: 5 },
      { id: 6, name: "MENDIOLA", order: 6 },
      { id: 7, name: "COVES", order: 7 },
      { id: 8, name: "IVÁN", order: 8 },
      { id: 9, name: "SERGIO", order: 9 },
      { id: 10, name: "OTTO", order: 10 },
    ],
  },
  {
    title: "Nivel de correa",
    players: [
      { id: 1, name: "ÁNGEL CORREA", order: 1 },
      { id: 2, name: "PJ", order: 2 },
      { id: 3, name: "PABLO", order: 3 },
      { id: 4, name: "COVES", order: 4 },
      { id: 5, name: "IVÁN", order: 5 },
      { id: 6, name: "ALBERTO", order: 6 },
      { id: 7, name: "SERGIO", order: 7 },
      { id: 8, name: "JOSE", order: 8 },
      { id: 9, name: "MENDIOLA", order: 9 },
      { id: 10, name: "MAIKEL", order: 10 },
    ],
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function PyramidGame() {
  const { title, players } = useMemo(
    () => pyramids[Math.floor(Math.random() * pyramids.length)],
    []
  );

  const [board, setBoard] = useState(Array(10).fill(null));
  const [playerQueue] = useState(shuffle(players));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleSquareClick = (index) => {
    if (!result && currentIndex < playerQueue.length) {
      // placing phase
      if (board[index]) return;
      const newBoard = [...board];
      newBoard[index] = playerQueue[currentIndex];
      setBoard(newBoard);
      setCurrentIndex((prev) => prev + 1);
    } else if (!result && currentIndex === playerQueue.length) {
      // rearranging phase
      if (selectedSquare === null) {
        if (board[index]) setSelectedSquare(index);
      } else if (selectedSquare === index) {
        setSelectedSquare(null);
      } else {
        const newBoard = [...board];
        [newBoard[selectedSquare], newBoard[index]] = [
          newBoard[index],
          newBoard[selectedSquare],
        ];
        setBoard(newBoard);
        setSelectedSquare(null);
      }
    }
  };

  const handleSubmit = () => {
    const isCorrect = board.every((p, idx) => p && p.order === idx + 1);
    setResult(
      isCorrect
        ? "Enhorabuena! Has ganado!"
        : "Has perdido. Inténtalo de nuevo refrescando la página"
    );
  };

  return (
    <Box textAlign="center" p={2}>
      <Typography variant="h6" mb={2}>
        {title}
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        {[1, 2, 3, 4].map((row, rowIndex) => (
          <Box key={rowIndex} display="flex" gap={1}>
            {Array.from({ length: row }).map((_, colIndex) => {
              const idx = (rowIndex * (rowIndex + 1)) / 2 + colIndex;
              const player = board[idx];
              const isCorrect = result && player && player.order === idx + 1;
              const isWrong = result && player && player.order !== idx + 1;
              const isSelected = selectedSquare === idx;

              return (
                <Paper
                  key={idx}
                  onClick={() => handleSquareClick(idx)}
                  sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    bgcolor: isCorrect ? "green" : isWrong ? "red" : "#1e293b",
                    color: "white",
                    position: "relative",
                    border: isSelected
                      ? "3px solid yellow"
                      : "1px solid transparent",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ position: "absolute", top: 2, left: 4 }}
                  >
                    {idx + 1}
                  </Typography>
                  <Typography variant="body2">
                    {player ? player.name : ""}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        ))}
      </Box>

      {currentIndex < playerQueue.length && !result && (
        <Typography mt={2}>
          Next player: <b>{playerQueue[currentIndex].name}</b>
        </Typography>
      )}

      {currentIndex === playerQueue.length && !result && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit Answer
        </Button>
      )}

      {result && (
        <Typography mt={2} fontWeight="bold">
          {result}
        </Typography>
      )}
    </Box>
  );
}
