import React from "react";

import { Container, Grid } from "@mui/material";
import coffee from "../../assets/coffee.PNG"

import './home.styles.scss';


const Home=()=>(

    <div className="container">

        <Grid container >
            <Grid className="first_column" item xs={3}  >
                <div className="coffee_row">
                    <img className="coffee_image" src={coffee} />
                </div>
                <div className="coffee_row">
                    <img className="coffee_image" src={coffee} />
                </div>
                <div>
                    <img className="coffee_image" src={coffee} />
                </div>
            </Grid>
            <Grid className="second_column" item xs={6}>
                I am middle component
            </Grid>
            <Grid item xs={3}>
                <div className="coffee_row">
                    <img className="coffee_image" src={coffee} />
                </div>
                <div className="coffee_row">
                    <img className="coffee_image" src={coffee} />
                </div>
                <div>
                    <img className="coffee_image" src={coffee} />
                </div>
            </Grid>
        
        </Grid>
    </div>
)

export default Home;