import React from 'react'
import loadingImg from '../images/gif/loading-arrow.gif';

const Loading = () => {
    return (
        <div className = "loading">
            <h4>Rooms Data Loading  ... </h4>
            <img src = {loadingImg} alt = "Loading ..." />            
        </div>
    )
}
export default Loading;
