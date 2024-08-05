import React from 'react'
import { Angular } from './utils/GaugeAngular'
const CurrentTemp = ({ chart }) => {
    return (
        <Angular
            title={"Current Tempreture Fahrenhayt"}
            min={5}
            max={122}
            plotBands={[
                {
                    from: 5,
                    to: 15,
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
                    from: 15,
                    to: 45,
                    color: {
                        linearGradient: {
                            x1: 0,
                            y1: 1,
                            x2: 0,
                            y2: 0
                        },
                        stops: [
                            [0, '#99CCFF'],
                            [1, '#DDDF0D']
                        ]
                    }
                }, {
                    from: 45,
                    to: 122,
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
            suffix="°F"
            data={chart.current.temp_f}

        />
    )
}

export default CurrentTemp