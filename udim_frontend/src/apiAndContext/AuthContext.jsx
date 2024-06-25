import { createContext, useState  } from 'react'

import React from 'react'
const ContextProvider = createContext()

const AuthContext = ( {children} ) => {
    const [ auth, setAuth ] = useState({})

  return (
    <ContextProvider.Provider value={{auth, setAuth}}>
      { children }
    </ContextProvider.Provider>
  )
}

export { AuthContext, ContextProvider }
