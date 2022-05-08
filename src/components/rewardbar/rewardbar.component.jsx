import React from "react";

import { Grid } from "@mui/material";
import { Circle } from "../Circle";


import './rewardsbar.styles.scss';


const RewardsBar = () => (

    <div className="rewards_row" >
        
        <div className="child_div">

            <Grid container spacing={2}>


                <Grid className="second_column" item sm={4} md={3} >

                    <Circle size="84px" showText={true} borderColor="white" backgroundColor={"#F8D957"}>
                        Hello
                    </Circle>
                </Grid>

                <Grid className="second_column" item sm={4} md={3}>
                    <Circle size="84px" showText={true} borderColor="white" backgroundColor={"#F8D957"}>
                        Hello
                    </Circle>
                </Grid>

                <Grid className="second_column" item sm={4} md={3} >
                    <Circle size="84px" showText={true} borderColor="white" backgroundColor={"#F8D957"}>
                        Hello
                    </Circle>
                </Grid>

                <Grid className="second_column" item sm={4} md={3} >
                    <Circle size="84px" showText={true} borderColor="white" backgroundColor={"#F8D957"}>
                        Hello
                    </Circle>
                </Grid>

            </Grid>

        </div>

    </div>
);

export default RewardsBar;