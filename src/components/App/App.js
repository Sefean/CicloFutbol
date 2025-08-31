import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header";
import GameSelector from "./GameSelector/GameSelector";
import Wordle from "../Games/Wordle/Wordle";
import Stack from "@mui/material/Stack";
import GameLayout from "./GameLayout/GameLayout";
import Pyramid from "../Games/Pyramid/Pyramid";
import Impostor from "../Games/Impostor/Impostor";
import FootballGrid from "../Games/FootballGrid/FootballGrid";
import GuessKid from "../Games/GuessKid/GuessKid";
import PixelCiclote from "../Games/PixelCiclote/PixelCiclote";

export default function App() {
  return (
    <Router basename="/CicloFutbol">
      <Stack sx={{ backgroundColor: "darkgray" }}>
        <Header />
        <Stack sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<GameSelector />} />
            <Route element={<GameLayout />}>
              <Route path="/wordle" element={<Wordle />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/impostor" element={<Impostor />} />
              <Route path="/legacy" element={<div>Legacy</div>} />
              <Route path="/footballGrid" element={<FootballGrid />} />
              <Route path="/guessKid" element={<GuessKid />} />
              <Route path="/pixelCiclote" element={<PixelCiclote />} />
            </Route>
          </Routes>
        </Stack>
      </Stack>
    </Router>
  );
}
