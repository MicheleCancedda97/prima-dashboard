import React from 'react'
import { LineChart, Line } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 400,
        pv: 200,
        amt: 6000,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function Chart({ }) {
    return (
        <LineChart width={300} height={90}
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
