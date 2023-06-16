import { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./GridSection.css";

type GridSectionProps = {
  gridData: {
    title: string;
    description: string;
  }[];
};

type gridSizesType = {
  xs: number;
  sm: number;
  md: number;
};

export const GridSection = ({ gridData }: GridSectionProps) => {
  const [gridSizes, setGridSizes] = useState({
    xs: 12,
    sm: 6,
    md: 4,
  } as gridSizesType);

  const calculateGridSizes = useCallback(() => {
    switch (gridData.length) {
      case 1:
        setGridSizes({
          xs: 12,
          sm: 12,
          md: 12,
        });
        break;
      case 2:
        setGridSizes({
          xs: 12,
          sm: 6,
          md: 6,
        });
        break;
      case 3:
        setGridSizes({
          xs: 12,
          sm: 6,
          md: 4,
        });
        break;
      default:
        setGridSizes({
          xs: 12,
          sm: 6,
          md: 4,
        });
        break;
    }
  }, [gridData]);

  useEffect(() => {
    calculateGridSizes();
  }, [calculateGridSizes]);

  return (
    <Grid container spacing={2} className="grid-container">
      {gridData.map((grid) => (
        <Grid item xs={gridSizes.xs} sm={gridSizes.sm} md={gridSizes.md}>
          <div className="title">{grid.title}</div>
          <div className="description">{grid.description}</div>
        </Grid>
      ))}
    </Grid>
  );
};
