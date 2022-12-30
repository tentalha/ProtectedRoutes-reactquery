import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) setCredentials(user)
    }, [])

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const { setUser } = useContext(AuthContext);

    const handleOnClick = () => {
        if (credentials.email && credentials.password) {
            setUser(credentials);
            localStorage.setItem("user", JSON.stringify(credentials));
            navigate('/')
        }
    }

    const handleOnChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <input type="text" placeholder="Email" id="" value={credentials?.email} onChange={handleOnChange} name='email' /><br />
            <input type="password" placeholder="Enter Password" id="" value={credentials?.password} onChange={handleOnChange} name='password' /><br />
            <button onClick={handleOnClick} disabled={!credentials.email || !credentials.password}>login</button>
        </div>
    )
}

export default Login