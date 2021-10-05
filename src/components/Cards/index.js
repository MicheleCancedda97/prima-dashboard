import React from "react";
import Card from "../Card";
import { Avatar, Color } from "..";
import { Text } from "..";




export default function Cards({ items = [], color= ["first", "second"]}) {
    return (
        <div>
             
              {items.map((item) => <Card>
                <Avatar />
                <Text color='primary' size='title'>{item.name}</Text>
                <Text color='secondary' size='caption'>{item.caption}</Text>
                <Color>{item.color} </Color>   
            </Card>)}
        </div>
    )
}