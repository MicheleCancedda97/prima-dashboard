import React from "react";

const sizeMap = {
    title: {
        fontSize: 18,
    },
    caption: {
        fontSize: 10,
    },
    body: {

        fontSize: 15,
    },
    currentDay: {
        fontSize : 20
    }

}
const colorMap = {
    inverse:{
        color: 'white'
    },
    primary : {
        color: 'green' 
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
}

export default function Text({ children, color, size }) {
    return <span style={{
        
        ...colorMap.primary,
        ...colorMap[color],
        ...sizeMap.body, // default
        ...sizeMap[size],
    }}>{children}</span>
}

