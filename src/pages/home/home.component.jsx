import React from "react";

import { Grid } from "@mui/material";
import banner from "../../assets/banner.PNG"
import full_banner from "../../assets/full_banner.PNG"

import RewardsBar from "../../components/rewardbar/rewardbar.component";
import './home.styles.scss';

const Home = () => (

    <div className="container">

        <Grid container spacing={2}>
            <Grid className="first_column" item sm={4} md={3} lg={3} display={{ xs: "none", sm: "block", md: "block", lg: "block" }} >   {/* 33.33% width on desktop and 50% width on mobile */}
                <div className="banner_row">
                    <img className="banner_image" src={banner} alt="banner.png" />
                </div>
                <div className="banner_row">
                    <img className="banner_image" src={banner} alt="banner.png" />
                </div>
                <div className="last_banner">
                    <img className="banner_image" src={banner} alt="banner.png" />
                </div>
            </Grid>
            <Grid className="second_column" item xs={12} sm={4} md={6} lg={6}  >  {/* 50% width on desktop and 66.66% width on mobile */}
              
                <RewardsBar></RewardsBar>
                  
            </Grid>
            <Grid className="first_column" item sm={4} md={3} lg={3} display={{ xs: "none", sm: "block", md: "block", lg: "block" }}>

                <div className="banner_row">
                    <img className="banner_image" src={banner} alt="banner.png" />
                </div>
                <div className="banner_row">
                    <img className="banner_image" src={banner} alt="banner.png" />
                </div>
                <div className="last_banner">
                    <img className="banner_image" src={banner} alt="banner.png" />
                </div>
            </Grid>


        </Grid>

        <div >
            <img className="full_banner_image" src={full_banner} alt="banner.png" />
        </div>

    </div>
)

export default Home;
