import React from "react";

const colorMap = {
    primary: {
        backgroundColor: '#e74c3c',
        width: 320,
        height: 160,
        borderRadius: 20,
        margin: '0 auto',
    },
    secondary: {
        backgroundColor: '#f1c40f',
    },
    thertiary: {
        backgroundColor: '#3498db',
    }
}
export default function Card({children, variant}) {
    return <div style={{
        ...colorMap.primary,
        ...colorMap[variant]
    }}>
        <p>{children}</p>
    </div>

}
