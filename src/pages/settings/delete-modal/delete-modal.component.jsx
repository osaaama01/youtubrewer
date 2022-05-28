
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './delete-modal.styles.scss';

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

const DeleteModal = ({isOpened,opened,deleteVideo,index}) => {  
    
    const deleteCurrentVideo=()=>{
        deleteVideo(index)
        isOpened();//to close the delete modal
    }

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            
            
            <Modal

                open={opened}
                onClose={isOpened}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} id="deletemodal">
                    <div className='close_button'>
                        <button className='close_modal_button' onClick={isOpened} >
                            <CloseIcon id='close_icon' />
                        </button>
                       
                    </div>
                    <div className='deleteModalcontainer'>
                        <span className='title'> Wich to delete Selecte video?</span>
                        <span className='sub-title'> Current brewing session will stop</span>
                    </div>
                    <div className='confirm'>
                        <button className='confirm_button' onClick={deleteCurrentVideo}>Yes</button>
                    </div>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
          Wich to delete Selecte video?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography> */}
                </Box>
            </Modal>
        </div>
    );

};

export default DeleteModal;