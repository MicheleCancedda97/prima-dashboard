import React from "react";

export default function List({ days }) {
    const list = days.map((day) => <li key={day}>{day}</li>);

    return (
        <ul>
            {list}
        </ul>
    )
}
