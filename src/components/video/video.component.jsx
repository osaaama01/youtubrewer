import { Grid } from "@mui/material";
import React from "react"

import "./video.styles.scss"

const Video=()=>{
    return (
        <Grid container justifyContent={"center"}>
            <Grid item md={11}>
            <video className="video_player"  width="100%" height="290" controls  >
            
                    {/* <source src="../../../assets/video1.mp4" type="video/mp4"/> */}
            </video>
            </Grid>

        </Grid>
    
    );
}

export default Video;