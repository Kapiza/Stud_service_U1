import React, {useContext, useState} from 'react'
import { DisContext, LesContext } from '../context'
import { addClass } from '../store/classes'
import { useDispatch } from 'react-redux'



const LessonForm = () => {

  const dispatch = useDispatch()
  
  const [lesson, setLesson] = useState({id:null, disciplineId:null, classType:"", name:""})

  const {disId} = useContext(DisContext)
  const {type} = useContext(LesContext)



  const createLesson = () => {
    lesson.id = Math.random() * Date.now()
    lesson.disciplineId = disId;
    lesson.classType = type

    dispatch(addClass(lesson))

    setLesson({id:null, disciplineId:null, classType:"", name:""})

  }


  return (
    <div class='LessonForm'>
      <input 
      placeholder='...'
      className='LessonInput' 
      value = {lesson.name} 
      onChange={(e) => setLesson({...lesson, name: e.target.value})}
      />
      <button className = " LessonSubmit" onClick={createLesson}>Submit</button>
    </div>
  )
}

export default LessonForm
