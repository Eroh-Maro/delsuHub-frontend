
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import { Provider } from 'react-redux'; // Import Provider
import { store } from './redux/store'; 
import router from './routers/Router.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router}/>
  </Provider>,
)
