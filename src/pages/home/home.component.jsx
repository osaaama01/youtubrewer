import React from "react";

import { Grid } from "@mui/material";
import banner from "../../assets/banner.PNG"
import full_banner from "../../assets/full_banner.PNG"

import RewardsBar from "../../components/rewardbar/rewardbar.component";
import './home.styles.scss';
import { Battery } from "../../components/battery/battery.component";
import { Coffee } from "../../components/coffee/coffee.component"
import CustomButtom from "../../components/custom-button/custom-button.component";
import SettingsBar from "../../components/settings-bar/settings-bar.component";
import Video from "../../components/video/video.component";

const Home = () => (

    <div className="container">
        <Grid container spacing={2} height="250">
            <Grid className="first_column" item sm={4} md={4} lg={4} display={{ xs: "none", sm: "block", md: "block", lg: "block" }} >   {/* 33.33% width on desktop and 50% width on mobile */}
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
            <Grid className="second_column" item xs={12} sm={4} md={4} lg={4}  >  {/* 50% width on desktop and 66.66% width on mobile */}
              
                <div style={{backgroundColor: '#BAB0B0', borderRadius:'12px'}}>
                <Battery buttonText={"Please set the video to brew"}/>
                <Video/>
                </div>
                <Coffee views={6}/>
                 
                <SettingsBar></SettingsBar>
                <RewardsBar/>

                <Grid className="app_buttons" container>
                    {/* <Grid item sm={4} md={2} display={{ xs: "none" ,md:"block"}}>
                        
                    </Grid> */}
                    <Grid item sm={4} md={6} display={{ xs: "none",md:"block"}}>
                        <CustomButtom top_text={"Download on the"} bottom_text={"App Store"} imageName={"apple"} width={24} height={24}  ></CustomButtom>
                    </Grid>
                    <Grid item sm={4} md={6} display={{ xs: "none",md:"block"}}>
                        <CustomButtom top_text={"GET IT ON"} bottom_text={"Google Play"} imageName={"google"}  width={24} height={24} ></CustomButtom>
                    </Grid>
                </Grid>
                


            </Grid>
            <Grid className="first_column" item sm={4} md={4} lg={4} display={{ xs: "none", sm: "block", md: "block", lg: "block" }}>

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
