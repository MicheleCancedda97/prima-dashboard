import React from "react";
import ImgExample from '../../img/persona.jpeg'
import Badge from  '../Badge'
//import image from 'https://randomuser.me/api/portraits/men/46.jpg'
// MAPPA

export default function Avatar({ src =''}) {
    return (
        <>
    
        <img
        style={{
            width: '50px',
            height: '50px',
            borderRadius: 100,
        }}
        src={src}
    />
    </>)
}