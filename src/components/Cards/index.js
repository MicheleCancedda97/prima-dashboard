import React from "react";
import CardItem from "./item";


export default function Cards({ items = [], selected }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', }}>
            {items.map((item) => 
            <CardItem key={item.name} 
            {...item} 
            selected={selected}
            />)}
        </div>
    )
}