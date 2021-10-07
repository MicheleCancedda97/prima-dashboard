import React, { Children } from 'react'
import { Avatar } from '..'
import { Text } from '..'


export default function Badge({ children, value }) {
//    const style = {position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}
    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
                backgroundColor: '#f54742',
                borderRadius: 100,
                width: 17,
                height: 17,
                position: 'absolute',
                right: -10,
                top:0,
                zIndex: 10
                
            }}>
            <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding:2}}>    
                <Text  color='current' size="small">{value}</Text>
            </div>
            </div>
            {children}
        </div>
    )
}
