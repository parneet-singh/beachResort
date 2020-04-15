import React from 'react';

const hero = (props) => {
    return(
        <div className = {props.hero}>
            {props.children}
        </div>
    )
}
hero.defaultProps = {
    hero : "defaultHero"
}
export default hero;