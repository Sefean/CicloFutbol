import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function GameCard({
  title,
  description,
  imagesrc,
  to,
  onClick,
}) {
  return (
    <Card sx={{ width: 250, border: "2px solid lightgray" }}>
      <CardActionArea
        {...(to ? { component: Link, to } : {})}
        onClick={onClick}
      >
        <CardMedia component="img" height="200" image={imagesrc} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
