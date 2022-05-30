import { Box, Modal } from "@mui/material";
import React, { useState,useEffect } from "react"
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';


import "./addvideo-modal.styles.scss"
import axios from "axios";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const youtube_parser=(url)=>{
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;   //regex to validate the youtube url
    var match = url.match(regExp);
    return (match&&match[7].length===11)? match[7] : false;
}

const AddVideoModal=({addVideoModel,addvideomodal_opened,addVideos})=>{

    const [vurl, setvurl] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [youtubeVideoId, setYoutubeId] = useState("");
    
    

    const handleChange=(event)=>{

        let youtube_video_id=youtube_parser(event.target.value);
        setYoutubeId(youtube_video_id)

        if (youtube_video_id.length === 11) {
            setvurl(event.target.value);
            const video_thumbnail = 'http://img.youtube.com/vi/'+youtube_video_id+'/hqdefault.jpg';
            setThumbnail(video_thumbnail);
            
        }
    }

    const addVideo=()=>{  
       
        addVideos( {
            video_url: vurl,
            subscription_type: 0,
            title: 'Final fantacy 6',
            imageUrl: thumbnail,
            youtubeId:youtubeVideoId,
        });
        setThumbnail("")
       
        addVideoModel();    //to close the modal
    }
    return(
        <div>            
            
            <Modal

                open={addvideomodal_opened}
                onClose={addVideoModel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} id="addvideo_modal">
                    <div className='close_button'>
                        <button className='close_modal_button' onClick={addVideoModel}  >
                            <CloseIcon id='close_icon' />
                        </button>
                       
                    </div>
                   
                    <div className='addModalcontainer'>
                        <span className='title'>Add Video</span>
                    </div>
                    <div className="videolink" >
                        <TextField className="videolink_textbox" 
                         label="Please paste video link here"  onChange={(e)=>{handleChange(e)}} />
                    </div>
                    <div className="thumbnail" hidden={thumbnail==""}>
                        <img className="thumbnail_image" src={thumbnail}></img>
                    </div>
                    <div className='addvideo'>
                        <button className='addvideo_button'onClick={addVideo}>Add this video</button>
                    </div>
                   
                </Box>
            </Modal>
        </div>
    );
};

export default AddVideoModal;