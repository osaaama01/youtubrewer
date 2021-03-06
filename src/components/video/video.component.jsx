import { Grid } from "@mui/material";
import React from "react";
import datant from "../../assets/datant.PNG";
import YoutubeEmbed from "./player.component";
import "./video.styles.scss";

const Video = ({ url }) => {
  return (
    <div>
      <Grid container justifyContent={"center"}>
        <Grid item md={11}>
          <YoutubeEmbed embedId={url} />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item md={11}>
          <img className='datant_image' src={datant} alt='datant'></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Video;
