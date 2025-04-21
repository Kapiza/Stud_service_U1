// import { } from '../context';
import { useDispatch } from 'react-redux';
import { ModalContext, ConMenuContext, DisContext, LesContext  } from '../context';
import { useState } from 'react';
import { deleteClass } from '../store/classes';


export const ContextProviders = ({children}) => {

    const dispatch = useDispatch()

    
    const [disId, setDisId] = useState(1)
    
    
    const [conMenuIsVisible, setConMenuIsVisible] = useState(false);
    const [conMenuCoords, setConMenuCoords] = useState({x:0, y:0});
    const [conMenuBtnAct, setConMenuBtnAct] = useState(()=>null) // i think this is bad code, but i dont know hoy to do it kmhg
    const [conMenuBtnType, setConMenuBtnType] = useState('')
    
    const [lessonType, setLessonType] = useState("")
    
    const displayMenu = (e, type, lessonType, lesson) => { 
        e.preventDefault()
        
        setConMenuCoords({
            x:e.pageX,
            y:e.pageY
        })


        if(type == "delete"){
            e.stopPropagation()    
            setConMenuBtnType(type)
              
            const a = () => {
                // func()
                dispatch(deleteClass(lesson))          
              }

            setConMenuIsVisible(true)
            setConMenuBtnAct(() => a)
            // dispatch(deleteClass(lesson))

        }
        
        
        if(type == "add"){
            const a = () => {
                // func()
                setModalIsVisible(true)
            }
            
            setConMenuBtnAct(() => a)
            setConMenuBtnType(type)
            setConMenuIsVisible(true)
            setLessonType(lessonType)
        }

    }
    
    const hideMenu = (e) => {
        e.preventDefault()
        setConMenuIsVisible(false)
    }
    
    
    const conMenu = {
        isVisible: conMenuIsVisible,
        setIsVisible: setConMenuIsVisible,
        coords: conMenuCoords,
        setCoords: setConMenuCoords,
        action: conMenuBtnAct,
        setAction: setConMenuBtnAct,
        btnType: conMenuBtnType,
        setBtnTyppe: setConMenuBtnType,
        
        displayMenu,
        hideMenu,
    }

    const [modalIsVisible, setModalIsVisible] = useState(false)
    
    const hideModal = (e) => {
        e.preventDefault()
        setModalIsVisible(false)
    }
    
    const modal = {
        isVisible: modalIsVisible, 
        setisVisible: setModalIsVisible,
        
        hideModal
    }


    const les = {
        type: lessonType,
        setType: setLessonType
    }
    
    return(
        <DisContext.Provider value={{disId, setDisId}}>
            <LesContext.Provider value = {les}>
                <ConMenuContext.Provider value={conMenu}>
                    <ModalContext.Provider value={modal}>
                        {children}
                    </ModalContext.Provider>
                </ConMenuContext.Provider>
            </LesContext.Provider>
        </DisContext.Provider>
    )
}

