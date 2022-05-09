import React from "react";

import { Grid, Hidden } from "@mui/material";
import { Circle } from "../Circle";


import './rewardsbar.styles.scss';


const RewardsBar = () => (

    <div className="rewards_row" >

        <div className="child_div">

            <Grid container spacing={0} >

            <Grid item md={0.8} implementation="css" smDown component={Hidden} />

                <Grid className="second_column" item sm={4} md={3} >

                    <Grid container alignItems="center" direction="row" >
                        <Grid item sm={4} md={5} >
                            <Circle backgroundColor={'#F8D957'} size={84} showText={true} borderColor={'#FFFFFF'} topText={'03'}
                                bottomText={'days'} borderWeight={1.5} >
                            </Circle>
                        </Grid>

                        <Grid item sm={4} md={7}   >

                            <div className="reward_background_div">

                            </div>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid className="second_column" item sm={4} md={3}>

                    <Grid container alignItems="center" direction={"row"}>
                        <Grid item sm={4} md={5} >
                            <Circle backgroundColor={'#F8D957'} size={84} showText={true} borderColor={'#FFFFFF'} topText={'07'}
                                bottomText={'days'} borderWeight={1.5} >
                            </Circle>
                        </Grid>

                        <Grid item sm={4} md={7}   >

                            <div className="reward_background_div">

                            </div>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid className="second_column" item sm={4} md={3}>

                    <Grid container alignItems="center" direction={"row"}  >
                        <Grid item sm={4} md={5} >
                            <Circle backgroundColor={'#F8D957'} size={84} showText={true} borderColor={'#FFFFFF'} topText={'15'}
                                bottomText={'days'} borderWeight={1.5} >
                            </Circle>
                        </Grid>

                        <Grid item sm={4} md={7}   >

                            <div className="reward_background_div">

                            </div>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid className="second_column" item sm={4} md={1.5}>

                    <Grid container alignItems="center" direction={"row"} >
                        <Grid item sm={4} md={5} >
                            <Circle backgroundColor={'#F8D957'} size={84} showText={true} borderColor={'#FFFFFF'} topText={'01'}
                                bottomText={'Month'} borderWeight={1.5} >
                            </Circle>
                        </Grid>

                      

                    </Grid>

                </Grid>




            </Grid>

        </div>

    </div>
);

export default RewardsBar;