import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='mx-auto min-h-screen max-w-screen-2xl px-4 py-6 font-primary'>
      <Navbar/>
    
    <main >
    <Outlet/>
    </main>
     
     <footer>Footer</footer> 
    </div>
  )
}

export default App
