import React from 'react'
import { Text } from '..'
export default function Chip({children}) {
    return (
        <div style={{
            backgroundColor: 'red',
            borderRadius: 100,
        }}>
        <Text color='current' size='currentDay'> {children} </Text>
        </div>
    )
}
