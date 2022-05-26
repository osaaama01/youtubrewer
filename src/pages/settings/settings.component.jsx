
import { Grid } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import video_image from "../../assets/video_image.PNG"

import './settings.styles.scss'
import DeleteModal from './delete-modal/delete-modal.component';
import React from 'react';
import AddVideoModal from './addvideo-modal/addvideo-modal.component';


class Settings extends React.Component {
  
    
    constructor({addVideo,videos,flipShowHome}) {
        super();
       
        this.state = {opened: false,addvideomodal_opened:false,addVideo:addVideo,videos:videos,flipShowHome:flipShowHome
        };
        this.OpenConfirmModal = this.OpenConfirmModal.bind(this);
        this.OpenAddVideoModal=this.OpenAddVideoModal.bind(this);
    }
    
     OpenConfirmModal(){
        
        this.setState({opened:!this.state.opened});
    }
    OpenAddVideoModal(){
        this.setState({addvideomodal_opened:!this.state.addvideomodal_opened});
    }

    render() {
        return <Grid className='settings_page' container>
            <AddVideoModal addVideoModel={this.OpenAddVideoModal} addvideomodal_opened={this.state.addvideomodal_opened} addVideos={this.state.addVideo} ></AddVideoModal>
          <DeleteModal isOpened={this.OpenConfirmModal} opened={this.state.opened}/>

      <div className='arrowback_button' >
          <button style={{ background: "#311414", color: "white", border: "none" }} onClick={this.state.flipShowHome}>
              <ArrowBackIcon height={44} className="arrow_icon" />
          </button>

      </div>
      <div className='tile' >
          {/* <hr style={{color:"white"}}/> */}

      </div>
      <Grid container>
          <Grid item md={3}>

          </Grid>
          <Grid item md={6} zeroMinWidth>

              <div className='videos_container'>
                  {
                      this.state.videos.map((video) => (
                          <div className='video-item' key={video.id}>
                              <img src={video_image} />
                              <span className='text'>{video.title}  </span>

                              <span className='delete'>
                                  <button className='delete_button' onClick={this.OpenConfirmModal}>
                                      <RemoveIcon style={{ color: "black", justifyContent: "center" }} />

                                  </button>
                              </span>

                          </div>
                      ))
                  }

              </div>


              <Grid container>
                  <Grid item>
                      <div className='add_video' >
                          <button className='add_video_button' onClick={this.OpenAddVideoModal}>
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
    }
  }





// const Settings = () => {
//     return (
        
//        // <DeleteModal></DeleteModal>


//         <Grid className='settings_page' container>

//             <div className='arrowback_button' >
//                 <button style={{ background: "#311414", color: "white", border: "none" }} onClick={OpenConfirmModal} >
//                     <ArrowBackIcon height={44} className="arrow_icon" />
//                 </button>

//             </div>
//             <div className='tile' >
//                 {/* <hr style={{color:"white"}}/> */}

//             </div>
//             <Grid container>
//                 <Grid item md={3}>

//                 </Grid>
//                 <Grid item md={6} zeroMinWidth>

//                     <div className='videos_container'>
//                         {
//                             videos.map((video) => (
//                                 <div className='video-item'>
//                                     <img src={video_image} />
//                                     <span className='text'>{video.title}  </span>

//                                     <span className='delete'>
//                                         <button className='delete_button' >
//                                             <RemoveIcon style={{ color: "black", justifyContent: "center" }} />

//                                         </button>
//                                     </span>

//                                 </div>
//                             ))
//                         }

//                     </div>


//                     <Grid container>
//                         <Grid item>
//                             <div className='add_video' >
//                                 <button className='add_video_button' >
//                                     <AddIcon style={{ color: "black", justifyContent: "center" }} />
//                                 </button>
//                                 <span className='video_text'>Add video   </span>


//                             </div>

//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <Grid item md={3}>


//                 </Grid>
//             </Grid>



//         </Grid>
//     )
// };

export default Settings;