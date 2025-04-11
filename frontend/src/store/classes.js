import {createSlice} from '@reduxjs/toolkit'

const classesSlice = createSlice({
    name: "classes",
    initialState: {
        byId: {
            1: { 
                id: 1,
                teacher_id: 1, 
                name: "Практическая работа 1", 
                class_type: "Практика", 
            },
        },
        allIds:[1]
    },
    reducers:{
        addClass(state, action){
            state.push(action.payload)
        }
    }
})

export const {addClass} = classesSlice.actions
export default classesSlice.reducer

