import { Box, Modal } from "@mui/material";
import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';


import "./addvideo-modal.styles.scss"


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


const videos = [
  
];


const AddVideoModal=({addVideoModel,addvideomodal_opened})=>{

    const [vurl, setvurl] = useState("");


    const handleChange=(event)=>{
        setvurl(event.target.value)
    }

    const addVideo=(url)=>{
        videos.push({videoUrl:url,subscribers:0})
        console.log(videos)
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
                    <div>{vurl}</div>
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
                    <div className='addvideo'>
                        <button className='addvideo_button'onClick={()=>{addVideo(vurl)}}>Add this video</button>
                    </div>
                   
                </Box>
            </Modal>
        </div>
    );
};

export default AddVideoModal;