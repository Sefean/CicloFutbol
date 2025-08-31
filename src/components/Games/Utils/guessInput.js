import React from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";

export default function GuessInput({
  guess,
  setGuess,
  isCorrect,
  handleSubmit,
  handleGuess,
  handleNext,
}) {
  return (
    <Stack sx={{ flex: 1, gap: 1, padding: 2 }} id="guessStack">
      {isCorrect && <Typography variant="h6">¡Correcto!</Typography>}
      <form onSubmit={handleSubmit} style={{ display: "contents" }}>
        <TextField
          label="Adivina"
          variant="outlined"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          autoFocus
        />
        {!isCorrect ? (
          <Button variant="contained" color="primary" onClick={handleGuess}>
            Comprobar
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={() => handleNext()}
          >
            Siguiente
          </Button>
        )}
      </form>
    </Stack>
  );
}
