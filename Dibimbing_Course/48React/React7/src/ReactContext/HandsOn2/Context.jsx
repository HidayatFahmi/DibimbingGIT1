/* eslint-disable react/prop-types */

import {createContext, useState} from 'react'

const TheContext = createContext({
    login : null,
    setLogin : ()=> {},
    userName : null,
    setUsername : () => {},
})

export {TheContext}

const TheProvider = ({children}) => {
    const [login, setLogin] = useState(false);
    const [userName, setUsername] = useState("")

    return(
        <>
        <TheContext.Provider value={{login, setLogin, userName, setUsername}}>
        {children}
        </TheContext.Provider>
        </>
    )
}

export default TheProvider;