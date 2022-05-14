import "./icon.styles.scss"
import google_play from "../../../assets/google_play.png"
import apple from "../../../assets/apple.png"
import settings_icon from "../../../assets/settings_icon.png"
import file_icon from "../../../assets/file_icon.png"

import React from "react"

function getImage(imageName) {
    if(imageName==="google"){
        return google_play; 
    }
    else if(imageName==="apple"){
        return apple;
    }
    else if(imageName==="settings"){
        return settings_icon;
    }
    else if(imageName==="file"){
        return file_icon;
    }
    
}

const Icon=({imageName,width,height})=>{

    const styles = {
        
        icon: {
            width:width,
            height:height
            
        }
    };
    return(
        
        <div>
            <img style={styles.icon} src={getImage(imageName)} />
        </div>
    )
        
};

export default Icon;