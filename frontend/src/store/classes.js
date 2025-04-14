import {createSlice} from '@reduxjs/toolkit'

const classesSlice = createSlice({
    name: "classes",
    initialState: {
        byId: {
            1: { 
                id: 1,
                disciplineId: 1, 
                classType: "практика", 
                name: "Практическая работа", 
            },
            2: { 
                id: 2,
                disciplineId: 1, 
                classType: "практика", 
                name: "Практическая работа", 
            },
            3: { 
                id: 3,
                disciplineId: 1, 
                classType: "теория", 
                name: "Лабораторная работа", 
            },
        },
        allIds:[1, 2, 3]
    },
    reducers:{
        addClass(state, action){
            state.push(action.payload)
        }
    }
})

export const {addClass} = classesSlice.actions
export default classesSlice.reducer

