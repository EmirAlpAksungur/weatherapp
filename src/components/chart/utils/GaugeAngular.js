import Highcharts from "highcharts/highcharts.js";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import React from "react";

exporting(Highcharts);
export const Angular = ({
    data = 0,
    min = 0,
    max = 100,
    suffix = "",
    plotBands = [
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
    ],
    title = "",
}) => {
    const options = {
        chart: {
            type: "gauge",
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: 'transparent',
        },
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: true,
        },
        title: {
            text: title,
        },
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: null,
            center: ["50%", "50%"],
            size: "80%",
            zIndex: 0,
        },
        navigation: {
            buttonOptions: {
                verticalAlign: "top",
                y: -10,
                x: -1,
            },
        },

        yAxis: {
            min: min,
            max: max,
            tickPixelInterval: 72,
            tickPosition: "inside",
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
            tickLength: 20,
            tickWidth: 2,
            minorTickPosition: "inside",
            labels: {
                distance: -40,
                rotation: "auto",
                style: {
                    fontSize: "14px",
                },
            },

            plotBands: [...plotBands],
        },

        series: [
            {
                name: "Value",
                data: [data],
                tooltip: {
                    valueSuffix: suffix,
                },
                dataLabels: {
                    format: `<span style="font-size: 14px">{y}
                    </span> <span style="font-size:14px">${suffix}  </span>`,
                    borderWidth: 0,
                    useHTML: true,

                },
                dial: {
                    radius: "80%",
                    backgroundColor: "gray",
                    baseWidth: 12,
                    baseLength: "0%",
                    rearLength: "0%",
                    pivot: {
                        backgroundColor: "gray",
                        radius: 8,
                    },
                },
            }
        ],
    };
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
};