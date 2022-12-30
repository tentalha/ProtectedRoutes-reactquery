import { Navigate } from 'react-router-dom';

const Protected = ({ Component }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
        return <Navigate to='/login' />
    }
    return <Component />
}

export default Protected