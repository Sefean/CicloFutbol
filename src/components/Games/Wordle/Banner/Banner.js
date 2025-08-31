import React from "react";

function Banner({ type, answer, numGuesses, handleFinishGame }) {
  const happyBanner = (
    <p>
      <strong>¡Enhorabuena!</strong> Lo conseguiste en
      <strong>
        {" "}
        {numGuesses} {numGuesses > 1 ? "intentos" : "intento"}
      </strong>
      .
    </p>
  );

  const sadBanner = (
    <p>
      Lo siento, la respuesta correcta es <strong>{answer}</strong>.
    </p>
  );
  return (
    <div className={`banner ${type}`}>
      {type === "happy" ? happyBanner : sadBanner}
      <div>
        <button className="myButton" onClick={handleFinishGame}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default Banner;
