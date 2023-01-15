/* eslint-disable react/jsx-key */
import React from 'react';
import ColorPaletteTile from './partials/ColorPaletteTile';

function Color() {
    return (
        <div>
            <h1>Colors</h1>
            <div>Our color palette is fairly simple</div>
            <div className="color-box-container">
                {[...Array(9).keys()].map(color => {
                    return <ColorPaletteTile dark={color < 4} backgroundColor={`red-${(color+1)*100}`}>Red {(color+1)*100}</ColorPaletteTile>
                })}
                {[...Array(9).keys()].map(color => {
                    return <ColorPaletteTile dark={color < 4} backgroundColor={`orange-${(color+1)*100}`}>Orange {(color+1)*100}</ColorPaletteTile>
                })}
                {[...Array(9).keys()].map(color => {
                    return <ColorPaletteTile dark={color < 6} backgroundColor={`yellow-${(color+1)*100}`}>Yellow {(color+1)*100}</ColorPaletteTile>
                })}
                {[...Array(9).keys()].map(color => {
                    return <ColorPaletteTile dark={color < 6} backgroundColor={`green-${(color+1)*100}`}>Green {(color+1)*100}</ColorPaletteTile>
                })}
                {[...Array(9).keys()].map(color => {
                    return <ColorPaletteTile dark={color < 4} backgroundColor={`blue-${(color+1)*100}`}>Blue {(color+1)*100}</ColorPaletteTile>
                })}
                {[...Array(9).keys()].map(color => {
                    return <ColorPaletteTile dark={color < 4} backgroundColor={`purple-${(color+1)*100}`}>Purple {(color+1)*100}</ColorPaletteTile>
                })}
            </div>
        </div>
    );
}

export default Color;