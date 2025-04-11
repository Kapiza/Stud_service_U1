import {createSlice} from '@reduxjs/toolkit'

const teachersSlice = createSlice({
    name: "teachers",
    initialState: {
        byId: {
            1:  {id: 2, name: "Анна Смирнова"},
        },
        allIds: [1]
    },
    reducers:{
        addTeacher(state, action){
            state.push(action.payload)
        }
    }
})

export const {addTeacher} = teachersSlice.actions
export default teachersSlice.reducer

