import React from 'react'
import { Avatar, Card, Text, Chart } from '..'

export default function CardItem({ color, name, caption, image }) {
    return (
        <Card variant={color}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
                    <Text color={'inverse'} size='title'>{name}</Text>
                    <Text color={'inverse'} size='caption'>{caption}</Text>
                </div>
                <Chart />
            </div>
        </Card>
    )
}
