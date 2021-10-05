import React from "react";
import Text from "../Text"

const colorMap = {
    first: {
        backgroundColor: 'red',
        width: 320,
        height: 160,
        borderRadius: 20,
        margin: 10,
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

export default function Card ({children, backgroundColor}) {
    return <div style={{
        ...colorMap.first,
        ...colorMap[backgroundColor]
    }}>
        <p>{children}</p>
    </div>

}
