import React from "react"
import dayjs from "dayjs";
import { Text } from "..";
import Chip from "../Chip";

export default function ListItem({ day, onSelectWeek, selected }) {

    const isSelected = dayjs(selected).isSame(day, 'day')
    const isNow = dayjs().isSame(day, 'day')

    return (
        <div onClick={() => onSelectWeek(day)}>
            <Text color='sett' size="caption">{dayjs(day).format('ddd')}</Text>
            <div>
                {isSelected
                    ? <Chip>{dayjs(day).format('DD')}</Chip>
                    : isNow
                        ? <Chip color="gray">{dayjs(day).format('DD')}</Chip>
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