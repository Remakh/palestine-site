import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './routes/About'
import Index from './routes/Index'
import Events from './routes/Events.jsx'
import { createBrowserRouter, RouterProvider, useRouteError  } from 'react-router-dom'

const Err = () => {
  const error = useRouteError()
  return (
    <div>
      <h2> Oops</h2>
      <h3 class='font-light italic'>There was an error: {error.statusText || error.message}</h3>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Err />,
    children: [
      {
        index: true,
        element: <Index /> 
      },

      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Events',
        element: <Events />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

