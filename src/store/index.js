import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './reducers/category'
import NewsArticleSlice from './reducers/recentsPost';
import postSlice from './reducers/postBlog';
import NewCategorySlice from './reducers/newState/newCategory';

const store = configureStore({
    reducer: {
        category: categoriesReducer,
        recentsArticles: NewsArticleSlice,
        postBlog: postSlice,
        setCategory: NewCategorySlice
    }
})

export default store;