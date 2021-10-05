import dayjs from "dayjs";
import React from "react";

const listMap = {
    display: "flex",
    flexDirection: "row",
    listElement: {
        marginLeft: 100
    }
}

export default function List({ days }) {
    const list = days.map((day) => <li style={listMap.listElement} key={day}>
        {dayjs(day).format('dddd')}
        {dayjs(day).format('DD')}
    </li>
    );

    return (
        <ul style={listMap}>
            {list}
        </ul>
    )
}
