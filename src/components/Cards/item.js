import React from 'react'
import { Avatar, Card, Text } from '..'

export default function CardItem({ color, name, caption, image }) {
    return (
        <Card variant={color}>
            <Avatar src={image} />
            <Text color={color !== 'secondary' && 'inverse'} size='title'>{name}</Text>
            <Text color={'inverse'} size='caption'>{caption}</Text>
        </Card>
    )
}
