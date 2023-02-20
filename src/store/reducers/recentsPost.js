import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid'
const initialState = [
    {
        id:uuid(),
        title:'the new title',
        content:'the new content',
        data:'the new data',
        favorite:false,
    },
    {
        id:uuid(),
        title:'the new title',
        content:'the new content',
        data:'the new data',
        favorite:false,
    },
    {
        id:uuid(),
        title:'the new title',
        content:'the new content',
        data:'the new data',
        favorite:false,
    }
]
const NewsArticleSlice = createSlice({
    name: 'newsArticle',
    initialState
})
export default NewsArticleSlice.reducer;
