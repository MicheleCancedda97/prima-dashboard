import React from "react"
import dayjs from "dayjs";
import { Text } from "..";
import Chip from "../Chip";

const now = new Date();

export default function ListItem({ day }) {
    const isNow = dayjs(now).isSame(day, 'day')
    return (
        <div >
            <Text color='text'size="caption">{dayjs(day).format('ddd')}</Text>
            <div>
            {isNow
                ? <Chip>{dayjs(day).format('DD')}</Chip>
                : <Text color='text'>{dayjs(day).format('DD')}</Text>
            }
            </div>
        </div>

    )
}

//{isNow ? <Chip></Chip> : <Text></Text>}
//<Text
//color={isNow ? "current" : "text"}
//size={isNow ? "currentDay" : "body"}>{dayjs(day).format('DD')}</Text>