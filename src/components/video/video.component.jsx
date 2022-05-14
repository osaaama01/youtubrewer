import { Grid } from "@mui/material";
import React from "react"
import datant from "../../assets/datant.PNG"


import "./video.styles.scss"

const Video = () => {
    return (
        <div>
            <Grid container justifyContent={"center"}>
                <Grid item md={11}>
                    <video className="video_player" width="100%" height="100%"  >

                        {/* <source src="../../../assets/video1.mp4" type="video/mp4"/> */}
                    </video>
                </Grid>


            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item md={11}>
                    <img className="datant_image" src={datant}></img>
                </Grid>
            </Grid>

        </div>

    );
}

export default Video;