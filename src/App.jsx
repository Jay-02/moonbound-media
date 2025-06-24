import './App.css'
import Home from './views/Home.jsx'
import AboutUsView from './views/AboutUsView.jsx'
import Navbar from './components/NavbarComponent.jsx'
import {  Routes, Route} from 'react-router-dom';
function App() { 

  return (
    <div className='flex-wrap bg-gradient-to-b from-twilight to-deep min-h-screen'>
      <Navbar/>
    <Routes>
      <Route path = '/' element= {<Home/>}/>
      <Route path = '/About_Us' element= {<AboutUsView/>}/>
    </Routes>
    </div>
      )
    }
    


export default App
