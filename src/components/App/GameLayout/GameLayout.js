import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";

export default function GameLayout() {
  return (
    <Stack className="game-wrapper" sx={{ flex: 1, padding: "1rem" }}>
      <Outlet />
    </Stack>
  );
}
