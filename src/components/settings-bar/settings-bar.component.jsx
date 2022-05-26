import { Grid } from "@mui/material";
import React from "react"
import Icon from "../custom-button/Icon/icon.component";

import "./settings-bar.styles.scss"

const SettingsBar=({flipShowHome})=>{
    
    return(
        <div className="settings_bar">
             <div className="top_row">
            
            </div>
            <div className="middle_row">
                <Grid container direction={"row"} alignItems="center">
                    <Grid item md={3}>
                        <button className="settings_button" style={{backgroundColor: 'transparent', border: 'none'}} onClick={flipShowHome}>
                            <Icon imageName={"settings"}  width={49} height={49}></Icon>
                        </button>
                        
                    </Grid>
                    <Grid item md={6}>
                        <span className="tile_text" >YoutubBrewer</span>
                    </Grid>
                    <Grid item md={3}>
                    <button className="file_button" style={{backgroundColor: 'transparent', border: 'none', filter: 'invert(100%)'}}>
                            <Icon imageName={"file"}  width={49} height={49}></Icon>
                    </button>
                    </Grid>
                </Grid>
            </div>
            <div className="bottom_row">
            
            </div>
        </div>
       
    )
}

export default SettingsBar;