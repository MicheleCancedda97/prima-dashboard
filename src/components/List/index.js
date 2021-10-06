import React from "react";
import ListItem from "./item";


const listMap = {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around'
}

export default function List({ days }) {
    const list = days.map((day,i) => <ListItem key={i} day={day} />);
    return (
        <div style={listMap}>
            {list}
        </div>
    )
}
