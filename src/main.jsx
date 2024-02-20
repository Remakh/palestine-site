import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './routes/About'
import Index from './routes/Index'
import Events from './routes/Events.jsx'
import { createBrowserRouter, RouterProvider, useRouteError  } from 'react-router-dom'
import Statements from './routes/Statements.jsx'
import Committee from './routes/Committee.jsx'
import EventPage from './routes/EventPage.jsx'
import { loader as EventLoader } from './components/EventHeader.jsx'
// import PersonPopup from './components/PersonPopup.jsx'
// import { loader as CommitteeLoader } from './components/PersonPopup.jsx'

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
        element: <About />,
      },
      {
        path: '/Committee',
        element: <Committee />,
        // children: [
        //   {
        //     path: '/:name',
        //     element: <PersonPopup />,
        //     loader: CommitteeLoader
        //   }
        // ]
      },
      {
        path: '/Events',
        element: <Events />
      },
      {
        path: '/Events/:id',
        element: <EventPage />,
        loader: EventLoader
        },
      {
        path: '/Statements',
        element: <Statements />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

