import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
      <div className='flex-col flex'> 
        <Header />
        <div className='content'>
        <Outlet />
        </div>
        <Footer />
      </div>
  )
}

export default App
