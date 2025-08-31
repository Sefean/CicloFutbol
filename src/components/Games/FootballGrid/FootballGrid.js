import { Box, Avatar, Typography, Stack } from "@mui/material";
import elcheImg from "../../../images/teams/elche.jpg";
import intangcoImg from "../../../images/teams/intangco.jpg";
import ravalImg from "../../../images/teams/raval.jpg";
import kelmeImg from "../../../images/teams/kelme.jpg";
import barcelonaImg from "../../../images/teams/barcelona.jpg";
import torrellanoImg from "../../../images/teams/torrellano.jpg";

const topLabels = [
  { id: "logo", label: "" },
  { id: "col1", label: "Peña raval", img: ravalImg },
  { id: "col2", label: "Kelme", img: kelmeImg },
  { id: "col3", label: "Pablo Iglesias", img: elcheImg },
];

const leftLabels = [
  { id: "logo", label: "" },
  { id: "row1", label: "Intangco", img: intangcoImg },
  { id: "row2", label: "Dbm Pumps", img: barcelonaImg },
  { id: "row3", label: "Barbería Gran Ducado", img: torrellanoImg },
];

const solutions = {
  "1-1": "SERGIO",
  "1-2": "ALBERTO",
  "1-3": "EMILIO",
  "2-1": "EZ ABDE",
  "2-2": "THIAGO ALCANTARA",
  "2-3": "IÑAKI PEÑA",
  "3-1": "COVES",
  "3-2": "COMODÍN",
  "3-3": "JONY ÑIGUEZ",
};

export default function FootballGrid({ maxWidth = 720 }) {
  const cells = Array.from({ length: 16 }).map((_, i) => i);

  return (
    <Box p={2} display="flex" justifyContent="center">
      <Box sx={{ width: "100%", maxWidth, mx: "auto" }}>
        <Box
          className="footballgrid-container"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
          }}
        >
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 4 }).map((__, c) => {
              const key = `${r}-${c}`;

              // Outer spacer to keep cell square across browsers
              return (
                <Box
                  key={key}
                  sx={{
                    position: "relative",
                    width: "100%",
                    "&::before": {
                      content: '""',
                      display: "block",
                      paddingTop: "100%",
                    },
                  }}
                >
                  <Stack>
                    {/* top-left logo */}
                    {r === 0 && c === 0 && (
                      <>
                        <Avatar
                          src={"/images/games/grid-logo.png"}
                          alt="FootballGrid"
                          sx={{
                            width: { xs: 48, sm: 56 },
                            height: { xs: 48, sm: 56 },
                          }}
                        >
                          GI
                        </Avatar>
                        <Typography variant="caption" sx={{ mt: 1 }}>
                          FootballGrid
                        </Typography>
                      </>
                    )}

                    {/* top row (column headers), excluding top-left */}
                    {r === 0 && c > 0 && (
                      <>
                        <Avatar
                          src={topLabels[c]?.img || ""}
                          alt={topLabels[c]?.label || ""}
                          sx={{
                            width: { xs: 44, sm: 56 },
                            height: { xs: 44, sm: 56 },
                          }}
                        >
                          {!topLabels[c]?.img}
                        </Avatar>
                        <Typography variant="caption" sx={{ mt: 1 }}>
                          {topLabels[c]?.label}
                        </Typography>
                      </>
                    )}

                    {/* left column (row headers), excluding top-left */}
                    {c === 0 && r > 0 && (
                      <>
                        <Avatar
                          src={leftLabels[r]?.img || ""}
                          alt={leftLabels[r]?.label || ""}
                          sx={{
                            width: { xs: 44, sm: 56 },
                            height: { xs: 44, sm: 56 },
                          }}
                        >
                          {!leftLabels[r]?.img}
                        </Avatar>
                        <Typography variant="caption" sx={{ mt: 1 }}>
                          {leftLabels[r]?.label}
                        </Typography>
                      </>
                    )}

                    {/* inner cells (r>0 && c>0) -> empty for now */}
                    {r > 0 && c > 0 && (
                      <Typography variant="body2" color="text.secondary">
                        {/* placeholder; later will show player image + name */}
                        {`[${r}][${c}]`}
                      </Typography>
                    )}
                  </Stack>
                </Box>
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
}
