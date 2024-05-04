import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Home from './pages/Home'

export const App = () => {

  return (
    <>
      <div>
        <div className='navbar2'>
          <Navbar2/>
        </div>
        <div className='navbar'>
          <Navbar/>
        </div>
        <div className='main-page'>
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
