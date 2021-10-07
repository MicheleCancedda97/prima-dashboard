import React from 'react'
import { Badge, Avatar, Title } from '..'

export default function Header() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20
        }}>
            <Title>STATISTICS</Title>
            <Badge value={10}>
                <Avatar src='https://randomuser.me/api/portraits/men/46.jpg'></Avatar>
            </Badge>
        </div>
    )
}

