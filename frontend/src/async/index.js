import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchLessons = createAsyncThunk(
    'classes/fetchLessons',
    async () => {
        const response = await axios.get("http://localhost:8080/lesson")
        // console.log(response.data)
        return response.data
    } 
)