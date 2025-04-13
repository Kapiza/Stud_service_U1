import {createSlice} from '@reduxjs/toolkit'

const teachersContactsSlice = createSlice({
    name: "teachersContacts",
    initialState: {
        byId: {
            1: {id: 1, teacherId: 1, link: "VK"},
            2: {id: 2, teacherId: 2, link: "E-mail"},

        },
        allIds: [1, 2]
    },
    reducers:{
        addTeacherContact(state, action){
            state.push(action.payload)
        }
    }
    
})

export const {addTeacherСontact} = teachersContactsSlice.actions
export default teachersContactsSlice.reducer


