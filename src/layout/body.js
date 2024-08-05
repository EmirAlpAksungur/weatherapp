import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material';
import Card from '../components/card/card';
import LineChart from '../components/chart/LineChart';
import CurrentTemp from '../components/chart/CurrentTemp';
import AvgTemp from '../components/chart/AvgTemp';
import Humadity from '../components/chart/Humadity';
import AvgHumadity from '../components/chart/AvgHumadity';
import TempF from '../components/chart/TempF';
import AvgTempF from '../components/chart/AvgTempF';
const Body = () => {
    const chart = useSelector((state) => state.weathers.data)

    return chart ? (
        <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12}>
                <Card>
                    <LineChart chart={chart} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CurrentTemp chart={chart} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <Humadity chart={chart} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <TempF chart={chart} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <AvgTemp chart={chart} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <AvgHumadity chart={chart} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <AvgTempF chart={chart} />
                </Card>
            </Grid>
        </Grid>
    ) : <></>



}

export default Body
