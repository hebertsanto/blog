import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuid} from 'uuid'
const initialState = [
    {
        id:uuid(),
        thumbnail:'url aqui',
        title:'título aqui',
        content:'conteúdo aqui',

        favorite:false,
    }
]

const postSlice = createSlice({
    name:'posts',
    initialState
})


export default postSlice.reducer;