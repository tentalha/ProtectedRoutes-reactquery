import { useState } from "react"
import { AuthContext } from "./AuthContext"

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider