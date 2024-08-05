import React from 'react'
import { Angular } from './utils/GaugeAngular'
const CurrentTemp = ({ chart }) => {
    console.log(chart);

    return (
        <Angular
            title={"Current Humidity"}
            min={0}
            max={100}
            plotBands={[{
                from: 0,
                to: 30,
                color: {
                    linearGradient: { x1: 1, y1: 0.5, x2: 0, y2: 0 },
                    stops: [
                        [0, '#DF5353'],
                        [1, '#DDDF0D']
                    ]
                },
            }, {
                from: 30,
                to: 70,
                color: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                    stops: [
                        [0, '#DDDF0D'],
                        [0.5, '#99FF99'],
                        [1, '#DDDF0D']
                    ]
                },
            }, {
                from: 70,
                to: 100,
                color: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#DDDF0D'],
                        [1, '#DF5353']
                    ]
                },
            }]}
            suffix="%"

            data={chart.current.humidity}

        />
    )
}

export default CurrentTemp