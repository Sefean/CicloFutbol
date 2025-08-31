import React from "react";

function GuessInput({
  handleAddGuess,
  disabled,
  setGameStatus,
  numLettersCorrectWord,
}) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleAddGuess(guess);
    setGuess("");
    setGameStatus("running");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <label htmlFor="guess-input">Respuesta:</label>
      <input
        required
        disabled={disabled}
        id="guess-input"
        pattern={`[a-zA-Z]{${numLettersCorrectWord}}`}
        title={`${numLettersCorrectWord} letter word`}
        maxLength={numLettersCorrectWord}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toLocaleUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
