import { createSlice } from '@reduxjs/toolkit'

const disciplinesSlice = createSlice({
    name: "disciplines",
    initialState: {
        byId:{
            1: { 
                id: 1,
                teacher_id: 1, 
                name: "Физика", 
                assesment_type: "экзамен", 
                descripton: "Описание", 
                has_course_work: true 
            }
        },
        allIds: [1]
    },
    reducers: {
        addDiscipline(state, action) {
            state.push(action.payload)
        }
    }
})

export const { addDiscipline } = disciplinesSlice.actions
export default disciplinesSlice.reducer
