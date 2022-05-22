
import { Grid } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import video_image from "../../assets/video_image.PNG"

import './settings.styles.scss'


const Settings = () => {
    return (
        <Grid className='settings_page' container>

            <div className='arrowback_button' >
                <button style={{ background: "#311414", color: "white", border: "none" }} >
                    <ArrowBackIcon height={44} className="arrow_icon" />
                </button>

            </div>
            <div className='tile' >
                {/* <hr style={{color:"white"}}/> */}

            </div>
            <Grid  container>
                <Grid item md={3}>

                </Grid>
                <Grid item md={6} zeroMinWidth>

                    <div className='videos_container'>
                        <div className='video-item'>
                            <img src={video_image} />
                            <span className='text'>Final fantacy 6  </span>

                            <span className='delete'>
                                <button className='delete_button' >
                                    <RemoveIcon style={{ color: "black", justifyContent: "center" }} />

                                </button>
                            </span>

                        </div>
                        <div className='video-item'>
                            <img src={video_image} />
                            <span className='text'>Final fantacy 6   </span>

                            <span className='delete'>
                                <button className='delete_button' >
                                    <RemoveIcon style={{ color: "black", justifyContent: "center" }} />

                                </button>
                            </span>

                        </div>
                        <div className='video-item'>
                            <img src={video_image} />
                            <span className='text'>Final fantacy 6   </span>

                            <span className='delete'>
                                <button className='delete_button' >
                                    <RemoveIcon style={{ color: "black", justifyContent: "center" }} />

                                </button>
                            </span>

                        </div>

                    </div>


                    <Grid container>
                        <Grid item>
                            <div className='add_video' >
                                <button className='add_video_button' >
                                    <AddIcon style={{ color: "black", justifyContent: "center" }} />
                                </button>
                                <span className='video_text'>Add video   </span>
                                

                            </div>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3}>
                  

                </Grid>
            </Grid>



        </Grid>
    )
};

export default Settings;