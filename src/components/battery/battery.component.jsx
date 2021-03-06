import { Button, Grid } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import "./battery.style.scss";
import { Circle } from "../Circle";

export const Battery = ({flipShowHome}) => {
  return (
    <Grid container style={{ justifyContent: "center", height: "100%" }}>
      <Grid item md={11} style={{ backgroundColor: "#D9CFCC" }}>
        <Grid
          item
          md={12}
          style={{ height: "15px", display: "flex", justifyContent: "right" }}
        >
          <Grid container item md={11}>
            <Grid
              item
              md={5}
              style={{
                display: "flex",
                alignItems: "flex-end",
                height: "100%",
              }}
            >
              <div className='battery_line'></div>
            </Grid>
            <Grid
              item
              md={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className='battery_text'>4hr</div>
            </Grid>
            <Grid
              item
              md={5}
              style={{
                display: "flex",
                alignItems: "flex-end",
                height: "100%",
              }}
            >
              <div className='battery_line'></div>
            </Grid>
            <Grid
              item
              md={1}
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                marginTop: "2px",
              }}
            >
              <div className='battery_text' style={{ marginTop: "4px" }}>
                <BoltIcon />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} style={{ height: "70%" }}>
          <Grid
            container
            item
            md={12}
            height='100%'
            justifyContent={"space-evenly"}
          >
            <Grid item>
              <Circle
                backgroundColor={"#04CF55"}
                size={25}
                borderColor={"#000000"}
                borderWeight={2}
              />
            </Grid>
            <Grid item>
              <Circle
                backgroundColor={"#04CF55"}
                size={25}
                borderColor={"#000000"}
                borderWeight={2}
              />
            </Grid>
            <Grid item>
              <Circle
                backgroundColor={"#04CF55"}
                size={25}
                borderColor={"#000000"}
                borderWeight={2}
              />
            </Grid>
            <Grid item>
              <Circle
                backgroundColor={"#04CF55"}
                size={25}
                borderColor={"#000000"}
                borderWeight={2}
              />
            </Grid>
            <Grid item>
              <Circle
                backgroundColor={"#04CF55"}
                size={25}
                borderColor={"#000000"}
                borderWeight={2}
              />
            </Grid>
            <Grid item>
              <Circle
                backgroundColor={"#04CF55"}
                size={25}
                borderColor={"#000000"}
                borderWeight={2}
              />
            </Grid>
            <Grid item>
              <Circle
                backgroundColor={"#04CF55"}
                size={25}
                borderColor={"#000000"}
                borderWeight={2}
              />
            </Grid>
            <Grid item>
              <Circle
                backgroundColor={"#04CF55"}
                size={25}
                borderColor={"#000000"}
                borderWeight={2}
              />
            </Grid>
            <Grid container item md={11} margin={"3px 3px"}>
              <Button
                variant='contained'
                style={{
                  backgroundColor: "#000000",
                  textTransform: "none",
                  cursor: "default",
                  width: "100%",
                  padding: "0",
                }}
                onClick={flipShowHome}
              >
                <div className='battery_button'>
                  Please set the video to brew
                </div>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
