import React, { useEffect, useRef } from "react"


const ContextMenu = ({coords, isVisible}) => {

    const contextMenuRef = useRef(null)



    useEffect(() => {
        if (contextMenuRef.current) {
          contextMenuRef.current.style.visibility = isVisible ? "visible" : "hidden";
          contextMenuRef.current.style.position = "absolute"
          contextMenuRef.current.style.top = `${coords.y}px`
          contextMenuRef.current.style.left =`${coords.x}px`
          console.log(coords)
        }
      }, [isVisible, coords]);
    // isVisible ? contextMenuRef.current.style.visibility = "visible" : contextMenuRef.current.style.visibility = "hidden"
    // console.log("what")

    return (
        <div className="ContextMenu" ref={contextMenuRef}>
            <button className="context_button add">

            </button>
        </div>
    )
}

export default ContextMenu