import React from "react"
import { css } from "@emotion/core"

export default (props) =>
(
    
    <input 
            css={css`line-height: 1.0;
                font-size: 18px;
                display: block;
                width: 65%;
                
                height: 50px;
                padding: 0 20px 0 20px;
                
                `} 
            type={props.type} name={props.name} placeholder={props.placeholder}/>

)