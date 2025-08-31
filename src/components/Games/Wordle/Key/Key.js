import React from "react";

function Key({ letter, status }) {
  const [classStatus, setClassStatus] = React.useState("");

  if (status == "new" && classStatus != "new") {
    setClassStatus("new");
  } else if (status) {
    if (classStatus != "correct" && classStatus != status) {
      setClassStatus(status);
    }
  }

  return (
    <div className={`key ${classStatus}`}>
      <span>{letter}</span>
    </div>
  );
}

export default Key;
