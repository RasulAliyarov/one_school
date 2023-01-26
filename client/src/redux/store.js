import { configureStore } from '@reduxjs/toolkit'
import TeacherSlice from './Slices/TeacherSlice'

export const store = configureStore({
    reducer: {
        teacher: TeacherSlice.reducer
    }
})