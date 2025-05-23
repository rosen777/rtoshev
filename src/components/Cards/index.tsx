import Grid from "@mui/material/Grid";
import MaterialCard from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from "./style.module.css";

export const Card = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <MaterialCard sx={{ minWidth: 275 }} className={styles.card_1}>
          <CardContent>
            <img alt="logo" src="logo512.png" width="512" height="512" />
            <Typography variant="h5" component="div">
              Item #1
            </Typography>
          </CardContent>
        </MaterialCard>
      </Grid>
    </Grid>
  );
};
