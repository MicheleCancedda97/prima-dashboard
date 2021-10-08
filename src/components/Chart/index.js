import React from 'react'
import { LineChart, Line } from 'recharts';



export default function Chart({data}) {
    return (
        <LineChart width={300} height={80}
            data={data}
            margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10
            }}>
            <Line type="monotone" dataKey="uv" stroke="#fff" />
        </LineChart>
    )
}
