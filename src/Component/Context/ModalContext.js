import React, { useState, createContext } from 'react';


export const ModalContext = createContext({
    modal: false,
    open: () => {},
    close: () => {}
})
export const ModalState = ({children}) => {

const [modal, setModal] = useState(false)
const open = () => setModal(true)
const close = () => setModal(false)
    return(
        <ModalContext.Provider value = {{open, modal, close}}>
            {children}
        </ModalContext.Provider>
    )
}