import React, { useContext, useRef, useEffect } from 'react'
import {ModalContext} from '../context'

const Modal = ({children}) => {

  const {isVisible} = useContext(ModalContext)
  const modalRef = useRef(null)
  
  
      useEffect(() => {
          if (modalRef.current) {
            modalRef.current.style.visibility = isVisible ? "visible" : "hidden";
            modalRef.current.style.position = "absolute"
          }
        }, [isVisible]);
  return (
    <div className='modal' ref={modalRef}>
      {children}
    </div>
  )
}

export default Modal
