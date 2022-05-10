import { Grid } from "@mui/material";
import "./battery.style.scss"

export const Battery = () => {
  return (
    <Grid container style={{ height: "12%", justifyContent: "center" }}>
      <Grid item md={8} style={{ backgroundColor: "#D9CFCC" }}>
        <Grid
          item
          md={12}
          style={{ height: "33.33%", justifyContent: "right", display: "flex" }}
        >
          <Grid container md={11}>
            <Grid item md={4.5} style={{display: 'flex', alignItems: 'flex-end'}}>
              <div className="line"></div>
            </Grid>
            <Grid item md={1} style={{display: 'flex', alignItems: 'flex-end'}}>
              <div className="text">4hr</div>
            </Grid>
            <Grid item md={4.5} style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
              <div className="line"></div>
            </Grid>
            <Grid item md={1} style={{display: 'flex', alignItems: 'flex-end'}}>
              <div className="text">4hr</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          style={{ backgroundColor: "green", height: "33.33%" }}
        >
          2
        </Grid>
        <Grid item md={12} style={{ backgroundColor: "red", height: "33.33%" }}>
          3
        </Grid>
      </Grid>
    </Grid>
  );
};
