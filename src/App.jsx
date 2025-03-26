import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footr from './components/Footr'
import Home from './components/Home'
import Login from './components/Login'
import Prices from './components/Prices'


//layouts
import RoutLayout from './layout/RoutLayout'

import {
  createBrowserRouter ,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoutLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login/>}/>
      </Route>
    ),
    {
      future: {
        v7_startTransition: true,
      },
    }
  );
  return (
    <div className='App'> 
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
