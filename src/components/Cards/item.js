import React from 'react'
import { Avatar, Card, Text } from '..'

export default function CardItem({ color, name, caption, image }) {
    return (
        <Card variant={color}>
            <Avatar hidden={true} src={image} />           
            <div style={{display:'flex', flexDirection:'column', flexWrap:1 }}> 
            <Text color={color !== 'secondary' && 'inverse'} size='title'>{name}</Text>
            
            <Text color={'inverse'} size='caption'>{caption}</Text>
        </div> 
        </Card>
    )
}
