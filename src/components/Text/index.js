import React from "react";

const sizeMap = {
    title: {
        fontSize: 25,
    },
    caption: {
        fontSize: 13,
    },
    small: {
        fontSize: 10,
    },
    body: {
        fontSize: 15,
    },
    currentDay: {
        fontSize : 13
    }

}
const colorMap = {
    inverse:{
        color: 'white'
    },
    primary : {
        color: 'black' 
    },
    secondary : {
         color: 'blue'
    },
    text : {
         color: '#333'
    },
    current : {
        color: 'white',
    },
    sett : {
        color: 'grey',
    },
}

export default function Text({ children, color, size }) {
    return <span style={{
        
        ...colorMap.primary,
        ...colorMap[color],
        ...sizeMap.body, // default
        ...sizeMap[size],
    }}>{children}</span>
}

