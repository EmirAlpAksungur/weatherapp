import { React, useState } from 'react'
import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import MyTextField from "../components/textfield/MyTextField"
import axios from 'axios'
import { setData } from '../reducers/weather'


const Header = () => {
  const dispatch = useDispatch()
  const handleSubmit = async (countr) => {
    try {
      let res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=1aea7b9c7a3746ab81394600222707&q=${countr}&days=1&aqi=no&alerts=no`)
      console.log(res);

      dispatch(setData(res.data))
    } catch (err) {
    }
  }
  return (
    <Grid container alignItems="center">
      <Grid item>
        Enter Name Of Your City :
      </Grid>
      <Grid item>
        <MyTextField handleSubmit={handleSubmit} />
      </Grid>
    </Grid>
  )
}

export default Header