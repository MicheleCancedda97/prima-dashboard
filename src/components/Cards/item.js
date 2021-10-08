import React from 'react'
import { Card, Text, Chart } from '..'
import { useHistory } from 'react-router';
import dayjs from 'dayjs';

//const mock

export default function CardItem({ color, name, caption, selected,data }) {
    const history = useHistory();

    function handleClick() {
        history.push("/about");
    }

    return (
        <Card onClick={handleClick} variant={color}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
                    <Text color={'inverse'} size='title'>{name}</Text>
                    <Text color={'inverse'} size='caption'>{caption}</Text>
                    <Text color={'inverse'} size='caption'>{dayjs(selected).format()}</Text>
                    
                </div>
                <Chart data={data} />
            </div>
        </Card>
    )
}
