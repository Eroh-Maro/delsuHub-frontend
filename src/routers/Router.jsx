import { createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Events from '../pages/Events'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            }, 
            {
                path: '/events',
                element: <Events/>,
            },   
            {
                path: '/contact',
                element: <Contact/>,
            }, 
                  ] 
    }])

export default router