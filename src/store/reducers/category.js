import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuid} from 'uuid'

const initialState = [
    {
        categoria:'postWeek',
        id: uuid(),
        title: 'Post Week 1',
        description: 'Testando Reducers',
        img:{
            src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        dataPost: '2021-01-01',
    }
]

const categoriesReducer = createSlice({
    name:'categories',
    initialState
})

export default categoriesReducer.reducer;