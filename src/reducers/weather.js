import { createSlice } from '@reduxjs/toolkit'

export const weatherReducer = createSlice({
    name: 'weathers',
    initialState: {
        data: null,
        isNone: false
    },
    reducers: {
        setData: (state, val) => {
            state.isNone = true
            state.data = val.payload
        },
    },
})

export const { setData } = weatherReducer.actions

export default weatherReducer.reducer