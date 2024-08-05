import React from 'react'
import { Angular } from './utils/GaugeAngular'
const CurrentTemp = ({ chart }) => {
    console.log(chart);

    return (
        <Angular
            title={"Avarage Tempreture"}
            min={-15}
            max={50}
            plotBands={[
                {
                    from: -15,
                    to: -5,
                    color: {
                        linearGradient: {
                            x1: 0,
                            y1: 1,
                            x2: 0,
                            y2: 0
                        },
                        stops: [
                            [0, '#F0F8FF'],
                            [1, "#99CCFF"]
                        ]
                    }
                }, {
                    from: -5,
                    to: 10,
                    color: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 0
                        },
                        stops: [
                            [0, '#99CCFF'],
                            [1, '#DDDF0D']
                        ]
                    }
                }, {
                    from: 10,
                    to: 50,
                    color: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0.5,
                            y2: 1
                        },
                        stops: [
                            [0, '#DDDF0D'],
                            [1, '#DF5353']
                        ]
                    }
                }
            ]}
            suffix="°C"

            data={chart.forecast.forecastday[0].day.avgtemp_c}

        />
    )
}

export default CurrentTemp