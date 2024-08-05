import React from 'react'
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import timeline from "highcharts/modules/timeline.js";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
highchartsMore(Highcharts);
timeline(Highcharts);
exporting(Highcharts);
const LineChart = ({ chart }) => {
    let options = {
        chart: {
            zoomType: 'x',
            type: "spline",
            backgroundColor: 'transparent',
        },
        title: {
            text: `${chart.location.name}`
        },
        subtitle: {
            text: `${chart.forecast.forecastday[0].date} Daily Weather Conditions of ${chart.location.name}`
        },
        series: [{
            name: ["Weather forecast"],
            data: [...chart.forecast.forecastday[0].hour.map((e) => e.temp_c)]
        }],
        xAxis: {
            categories: [...chart.forecast.forecastday[0].hour.map((e) => e.time.slice(11, 16))],
        },
        yAxis: {
            keys: [...chart.forecast.forecastday[0].hour.map(e => e.condition.text)]
        },
        tooltip: {
            valueSuffix: ' °C',
        },
        legend: {
            enabled: false,
        },
        exporting: {
            enabled: true,
        },
        credits: {
            enabled: false,
        },
    }
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default LineChart