import { createSlice } from '@reduxjs/toolkit'

const disciplinesSlice = createSlice({
    name: "disciplines",
    initialState: {
        byId:{
            1: { 
                id: 1,
                teacherId: 1, 
                name: "Физика", 
                assessment_type: "экзамен", 
                description: "Описание", 
                has_course_work: true 
            },
            2: { 
                id: 2,
                teacherId: 2, 
                name: "Химия", 
                assessment_type: "зачет", 
                description: "Описание", 
                has_course_work: false 
            }
        },
        allIds: [1, 2]
    },
    reducers: {
        addDiscipline(state, action) {
            state.push(action.payload)
        }
    }
})

export const { addDiscipline } = disciplinesSlice.actions
export default disciplinesSlice.reducer
