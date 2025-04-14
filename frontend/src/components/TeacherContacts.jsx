import React from 'react'
import { useSelector } from 'react-redux'



const TeacherContacts = ({teacherId}) => {

    const teachersContacts = useSelector(state => state.teachersContacts)
    // const teacherContacts = teachersContacts.byId[teacherId]
  return (
    <div>
        {teachersContacts.allIds.map((id) => {
            let contact = teachersContacts.byId[id]
            if(contact.teacherId === teacherId){
                // console.log("hi") 
                return(
                    <p className="link">{contact.link}</p>
                )
            }
        })}
    </div>
  )
}

export default TeacherContacts