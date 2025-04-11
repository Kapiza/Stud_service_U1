import {createSlice} from '@reduxjs/toolkit'

const teachersContactsSlice = createSlice({
    name: "teachersContacts",
    initialState: {
        byId: {
            1: {id: 1, teacher_id: 1, name: "VK"},
        },
        allIds: [1]
    },
    reducers:{
        addTeacherContact(state, action){
            state.push(action.payload)
        }
    }
    
})

export const {addTeacherСontact} = teachersContactsSlice.actions
export default teachersContactsSlice.reducer


