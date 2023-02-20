import {createSlice} from '@reduxjs/toolkit'

const setInitialState = [
    {
        category: 'postweek',
        title:'post Completo Vai estar aqui'
    }
]


const NewCategorySlice = createSlice({
    name:'newCategory',
    initialState: setInitialState
})

export default NewCategorySlice.reducer;