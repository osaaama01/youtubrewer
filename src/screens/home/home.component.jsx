import React from "react";

import { Grid } from "@mui/material";
import coffee from "../../assets/coffee.PNG"

import './home.styles.scss';
import { Circle } from "../../components/Circle";


const Home=(p)=>(

    <div className="container">

        <Grid container >
            <Grid className="first_column" item xs={3}  >
                <div className="coffee_row">
                    <img className="coffee_image" src={coffee} alt='Coffee'/>
                </div>
                <div className="coffee_row">
                    <img className="coffee_image" src={coffee} alt='Coffee'/>
                </div>
                <div>
                    <img className="coffee_image" src={coffee} alt='Coffee'/>
                </div>
            </Grid>
            <Grid className="second_column" item xs={6}>
                <Circle size={'40px'} showText = {true}/>
            </Grid>
            <Grid item xs={3}>
                <div className="coffee_row">
                    <img className="coffee_image" src={coffee} alt='Coffee'/>
                </div>
                <div className="coffee_row">
                    <img className="coffee_image" src={coffee} alt='Coffee'/>
                </div>
                <div>
                    <img className="coffee_image" src={coffee} alt='Coffee'/>
                </div>
            </Grid>
        
        </Grid>
    </div>
)

export default Home;