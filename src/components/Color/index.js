import React from "react";

const colorMap = {
    primary : {
        color: 'green' 
    },
    secondary : {
         color: 'blue'
    }
}

export default function Color({ children, color}) {
    return <p style={{
    
        ...colorMap[color],
        
    }}>{children}</p>
}