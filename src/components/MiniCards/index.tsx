import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import "./MiniCards.css";

export const MiniCards = ({
  title,
  description,
  actionText,
}: {
  title: string;
  description: string;
  actionText: string;
}): JSX.Element => {
  return (
    <div className="card-container">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"assets/slider_placeholder.jpg"}
          />
          <CardContent>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card-action">
          <Button variant="action" size="small">
            {actionText}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
