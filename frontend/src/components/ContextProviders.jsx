import { DisContext } from '../context';
import { ConMenuContext } from '../context';
import { useState } from 'react';


export const ContextProviders = ({children}) => {

    const [disId, setDisId] = useState(1)

    const [conMenuIsVisible, setConMenuIsVisible] = useState(false);
    const [conMenuCoords, setConMenuCoords] = useState({x:0, y:0});
    const displayMenu = (e) => { 
        e.preventDefault()
        setConMenuCoords({
            x:e.pageX,
            y:e.pageY
        })
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
        displayMenu,
        hideMenu
    }

    return(
        <ConMenuContext.Provider value={conMenu}>
            <DisContext.Provider value={{disId, setDisId}}>
                {children}
            </DisContext.Provider>
        </ConMenuContext.Provider>
    )
}

