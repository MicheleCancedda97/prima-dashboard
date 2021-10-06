import React, { Children } from 'react'
import { Avatar } from '..'
import { Text } from '..'
export default function Badge({ children, value }) {
    return (
        <div style={{ position: 'relative', width: 90, display: 'inline',  }}>
            <div style={{
                backgroundColor: '#f54742',
                borderRadius: 100,
                width: 17,
                height: 17,
                position: 'absolute',
                right: -10,
                
            }}>
               <Text> {value} </Text>
            </div>
            {children}
        </div>
    )
}
