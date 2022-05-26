import { Grid } from "@mui/material";
import coffee from "../../assets/coffee.png";

export const Coffee = ({ views }) => {
  return (
    <Grid container style={{ height: "20%", justifyContent: "center" }}>
      <Grid
        item
        md={9}
        style={{
          backgroundColor: "#D9CFCC",
          backgroundImage: `url(${coffee})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "40px" }}>{views}</div>
      </Grid>
    </Grid>
  );
};
