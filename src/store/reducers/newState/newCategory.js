import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuid} from 'uuid'

const setInitialState = [
    {
        id:uuid(),
        category: 'postweek',
        title: 'post Completo Vai estar aqui',
        img: {
            src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem 
         ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, 
         consectetur adipiscing elit, sed do eiusmod tempor incidLorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incidLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidLorem 
         dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit, sed do eiusmod tempor incidLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidLorem ipsum dolor sit amet, 
         consectetur adipiscing elit, sed do eiusmod tempor incid`
    }
]


const NewCategorySlice = createSlice({
    name: 'newCategory',
    initialState: setInitialState
})

export default NewCategorySlice.reducer;