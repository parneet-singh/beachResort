import React from 'react';
import '../../src/App.css';

const banner = (props) => {
    return(
        <div className = "banner">
            <h1>{props.title}</h1>
            <div></div>
            <p>{props.subtitles}</p>
            {props.children}             
        </div>
    )
}
export default banner;