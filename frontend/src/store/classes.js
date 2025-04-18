import {createSlice} from '@reduxjs/toolkit'

const classesSlice = createSlice({
    name: "classes",
    initialState: {
        byId: {
            1: { 
                id: 1,
                disciplineId: 1, 
                classType: "практика", 
                name: "Оптика лаб.1 ", 
            },
            2: { 
                id: 2,
                disciplineId: 1, 
                classType: "практика", 
                name: "Практическая работа", 
            },
            3: { 
                id: 3,
                disciplineId: 2, 
                classType: "практика", 
                name: "Лабораторная работа", 
            },
            4: { 
                id: 4,
                disciplineId: 1, 
                classType: "практика", 
                name: "Оптика лаб.1 ", 
            },
            5: { 
                id: 5,
                disciplineId: 1, 
                classType: "практика", 
                name: "Оптика лаб.1 ", 
            },
            6: { 
                id: 6,
                disciplineId: 1, 
                classType: "практика", 
                name: "Оптика лаб.1 ", 
            },
            6: { 
                id: 6,
                disciplineId: 1, 
                classType: "практика", 
                name: "Оптика лаб.1 ", 
            },
            7: { 
                id: 7,
                disciplineId: 1, 
                classType: "практика", 
                name: "Оптика лаб.1 ", 
            },
        },
        allIds:[1, 2, 3, 4, 5, 6, 7]
    },
    reducers:{
        addClass(state, action){
            state.push(action.payload)
        }
    }
})

export const {addClass} = classesSlice.actions
export default classesSlice.reducer

