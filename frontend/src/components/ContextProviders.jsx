// import { } from '../context';
import { ModalContext, ConMenuContext, DisContext  } from '../context';
import { useState } from 'react';


export const ContextProviders = ({children}) => {
    
    const [disId, setDisId] = useState(1)
    
    const [modalIsVisible, setModalIsVisible] = useState(false)
    
    const [conMenuIsVisible, setConMenuIsVisible] = useState(false);
    const [conMenuCoords, setConMenuCoords] = useState({x:0, y:0});
    const [conMenuBtnAct, setConMenuBtnAct] = useState(()=>null) // i think this is bad code, but i dont know hoy to do it kmhg
    const [conMenuBtnType, setConMenuBtnType] = useState('')
    
    const displayMenu = (e, type, func) => { 
        e.preventDefault()

        if(type == "delete"){
            e.stopPropagation()        
        }

        setConMenuCoords({
            x:e.pageX,
            y:e.pageY
        })
        
        const a = () => {
            func()
            setModalIsVisible(true)
        }
        
        setConMenuBtnAct(() => a)
        setConMenuBtnType(type)
        setConMenuIsVisible(true)
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

    const hideModal = (e) => {
        e.preventDefault()
        setModalIsVisible(false)
    }

    const modal = {
        isVisible: modalIsVisible, 
        setisVisible: setModalIsVisible,

        hideModal
    }

    return(
        <ConMenuContext.Provider value={conMenu}>
            <DisContext.Provider value={{disId, setDisId}}>
                <ModalContext.Provider value={modal}>
                    {children}
                </ModalContext.Provider>
            </DisContext.Provider>
        </ConMenuContext.Provider>
    )
}

