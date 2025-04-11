import { configureStore } from '@reduxjs/toolkit';
import  teachersReducer from './teachers'
import teachersContacts from './teachersContacts'
import disciplinesReducer from './disciplines'
import classesReducer from './classes'


export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    teachersContacts: teachersContacts,
    disciplines: disciplinesReducer,
    classes: classesReducer
  }
});