import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { AuthProvider } from './hooks/useAuth'


function App() {


  return (
    <AuthProvider>
      <div className='flex-col flex'> 
          <Header />
          <div className='content'>
          <Outlet />
          </div>
          <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
