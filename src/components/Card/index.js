import React from "react";

const colorMap = {
    first: {
        backgroundColor: 'red',
        width: 320,
        height: 160,
        borderRadius: 20,
        margin: '0 auto',
    },
    second: {
        backgroundColor: 'yellow',
    },
    third: {
        backgroundColor: 'blue',
        fontSize: 25,
        color: 'white'
    }
}
export default function Card({children, backgroundColor}) {
    return <div style={{
        ...colorMap.first,
        ...colorMap[backgroundColor]
    }}>
        <p>{children}</p>
    </div>

}
