import React from "react";
import ListItem from "./item";

const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    //backgroundColor: 'rgba(140,140,140,0.2)',
    //borderRadius: 50,
}

export default function List({ days, selected, onSelectWeek }) {
    const list = days.map((day, i) => <ListItem
        key={i}
        day={day}
        selected={selected}
        onSelectWeek={onSelectWeek}
    />);
    return (
        <div style={style}>
            {list}
        </div>
    )
}
