import React from "react";
import CardItem from "./item";


export default function Cards({ items = [] }) {
    return (
        <div>
            {items.map((item) => <CardItem key={item.name} {...item} />)}
        </div>
    )
}