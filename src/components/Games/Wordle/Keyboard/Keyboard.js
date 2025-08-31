import React from "react";
import Key from "../Key/Key";

function Keyboard({ checkedGuess, gameStatus }) {
  function getStatus(letter) {
    if (gameStatus == "new") {
      return "new";
    }
    if (checkedGuess) {
      const found = checkedGuess.find((item) => item.letter === letter);
      return found ? found.status : "";
    }
  }

  return (
    <div className="keyboard">
      <div className="keyboardRow">
        <Key letter="Q" status={getStatus("Q")} />
        <Key letter="W" status={getStatus("W")} />
        <Key letter="E" status={getStatus("E")} />
        <Key letter="R" status={getStatus("R")} />
        <Key letter="T" status={getStatus("T")} />
        <Key letter="Y" status={getStatus("Y")} />
        <Key letter="U" status={getStatus("U")} />
        <Key letter="I" status={getStatus("I")} />
        <Key letter="O" status={getStatus("O")} />
        <Key letter="P" status={getStatus("P")} />
      </div>
      <div className="keyboardRow">
        <Key letter="A" status={getStatus("A")} />
        <Key letter="S" status={getStatus("S")} />
        <Key letter="D" status={getStatus("D")} />
        <Key letter="F" status={getStatus("F")} />
        <Key letter="G" status={getStatus("G")} />
        <Key letter="H" status={getStatus("H")} />
        <Key letter="J" status={getStatus("J")} />
        <Key letter="K" status={getStatus("K")} />
        <Key letter="L" status={getStatus("L")} />
      </div>
      <div className="keyboardRow">
        <Key letter="Z" status={getStatus("Z")} />
        <Key letter="X" status={getStatus("X")} />
        <Key letter="C" status={getStatus("C")} />
        <Key letter="V" status={getStatus("V")} />
        <Key letter="B" status={getStatus("B")} />
        <Key letter="N" status={getStatus("N")} />
        <Key letter="M" status={getStatus("M")} />
      </div>
    </div>
  );
}

export default Keyboard;
