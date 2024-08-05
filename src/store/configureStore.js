import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../reducers/weather'

export default configureStore({
  reducer: {
    weathers:weatherReducer
  },
})