import React from "react"



import "./custom-button.styles.scss"
import Icon from "./Icon/icon.component";



const CustomButtom= ({top_text,bottom_text,imageName,width,height})=>{
    return(
      
    <button type="button" className="custom_button" >
        <span className="button_icon">
            <Icon imageName={imageName}  width={width} height={height}></Icon>
        </span>
        <span>
        <div className="text top_text">
            <div className="text bottom_text">
                {top_text}
            </div>
            {bottom_text}
        </div>
        </span>
        

    </button>
    )};


export default CustomButtom;