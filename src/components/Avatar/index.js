import React from "react";
import ImgExample from '../../img/persona.jpeg'

// MAPPA

export default function Avatar({ }) {
    return <img
        style={{
            width: '50px',
            height: '50px',
            borderRadius: 100,
        }}
        src={ImgExample}
    />
}