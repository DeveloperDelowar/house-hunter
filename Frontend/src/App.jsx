import './App.css'
import BookHouseForm from './components/BookHouseForm/BookHouseForm';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import HouseDetails from './components/HouseDetails/HouseDetails';
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from "react-router-dom";

function App() {


  return (
    <div className='bg-gray-10'>
      <div className=' w-11/12 mx-auto '>
        <Navbar />
        

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/house/:id' element={<HouseDetails />} />
            <Route path='/book/:id' element={<BookHouseForm />} />

            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
