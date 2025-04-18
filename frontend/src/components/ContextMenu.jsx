import React, { useContext, useEffect, useRef } from "react"
import { ConMenuContext } from "../context";


const ContextMenu = ({children}) => {

    const contextMenuRef = useRef(null)

    const {isVisible, coords, action, btnType} = useContext(ConMenuContext)

    useEffect(() => {
        if (contextMenuRef.current) {
          contextMenuRef.current.style.visibility = isVisible ? "visible" : "hidden";
          contextMenuRef.current.style.position = "absolute"
          contextMenuRef.current.style.top = `${coords.y}px`
          contextMenuRef.current.style.left =`${coords.x}px`
          console.log(coords)
        }
      }, [isVisible, coords]);

    return (
        <div className="ContextMenu" ref={contextMenuRef}>
              {/* {children} */}
              
            {/* <button className="context_button add" onClick={action}> */}
            <button className={`context_button ${btnType}`} onClick={action}>

            </button>
        </div>
    )
}

export default ContextMenu