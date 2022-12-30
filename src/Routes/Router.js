import { useRoutes } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Login from '../components/Login'
import Protected from './Protected'

const Router = () => {

    return useRoutes([
        {
            path: '/',
            element: <Protected Component={Home} />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/contact',
            element: <Protected Component={Contact} />
        },
        {
            path: '/about',
            element: <Protected Component={About} />
        }
    ]);
}

export default Router