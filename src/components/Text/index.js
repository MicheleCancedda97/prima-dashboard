import React from "react";

const sizeMap = {
    title: {
        fontSize: 18,
        letterSpacing: 10
    },
    body: {
        fontSize: 14,
        letterSpacing: 1
    },
}
const colorMap = {
    primary : {
        color: 'green' 
    },
    secondary : {
         color: 'blue'
    }
}

export default function Text({ children, color, size }) {
    return <p style={{
        ...colorMap.primary,
        ...colorMap[color],
        ...sizeMap.body, // default
        ...sizeMap[size],
    }}>{children}</p>
}

