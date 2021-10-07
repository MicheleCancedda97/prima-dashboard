import React from "react";
import ImgExample from '../../img/persona.jpeg'
import Badge from '../Badge'
//import image from 'https://randomuser.me/api/portraits/men/46.jpg'
// MAPPA

export default function Avatar({ src = '', path}) {
    return (
        <img
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
            }}
            src={src}
            path={path}
        />
    )
}