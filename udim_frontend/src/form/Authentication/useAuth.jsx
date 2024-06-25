import { useContext } from 'react'
import { ContextProvider } from '../../apiAndContext/AuthContext'

const useAuth = () => {
    const { auth, setAuth } = useContext(ContextProvider)
    return { auth, setAuth }
}

export default useAuth;