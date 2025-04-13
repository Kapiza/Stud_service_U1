import {createSlice} from '@reduxjs/toolkit'

const teachersSlice = createSlice({
    name: "teachers",
    initialState: {
        byId: {
            1:  {id: 1, name: "Анна Смирнова"},
            2:  {id: 2, name: "Ситников М. Н."},

        },
        allIds: [1, 2]
    },
    reducers:{
        addTeacher(state, action){
            state.push(action.payload)
        }
    }
})

export const {addTeacher} = teachersSlice.actions
export default teachersSlice.reducer

