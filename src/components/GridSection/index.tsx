import { Grid } from "@mui/material";
import "./GridSection.css";

type GridSectionProps = {
  gridData: {
    title: string;
    description: string;
  }[];
};

export const GridSection = ({ gridData }: GridSectionProps) => {
  return (
    <Grid container spacing={2} className="container">
      {gridData.map((grid) => (
        <Grid item xs={12} sm={6} md={4}>
          <div className="title">{grid.title}</div>
          <div className="description">{grid.description}</div>
        </Grid>
      ))}
    </Grid>
  );
};
