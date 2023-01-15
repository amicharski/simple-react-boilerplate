import React from 'react';
import variables from '../../../styles/small.module.scss';

function ColorPaletteTile(props){
    return (
        <div className="color-box" style={{backgroundColor: variables[props.backgroundColor]}}>
            <span style={props.dark ? {color: "#111"} : null}>{props.children}</span>
        </div>
    );
}

export default ColorPaletteTile;

/* `${#FFAAAA}`}}> */

/* Line 8 is a temporary fix, should be using the text-dark class selector */