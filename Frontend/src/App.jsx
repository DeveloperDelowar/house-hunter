import './App.css'
import BookHouseForm from './components/BookHouseForm/BookHouseForm';
import Houses from './components/Dashboard/Owner/Houses';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import HouseDetails from './components/HouseDetails/HouseDetails';
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from "react-router-dom";
import Bookings from './components/Dashboard/Owner/Bookings';
import AddNewHouse from './components/Dashboard/Owner/AddNewHouse';

function App() {


  return (
    <div className='bg-gray-10'>
      <div className=' w-11/12 mx-auto '>
        <Navbar />
        

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/house/:id' element={<HouseDetails />} />
            <Route path='/book/:id' element={<BookHouseForm />} />

            <Route path='/dashboard' element={<Dashboard />}> 
              <Route path="houses" element={<Houses />} />
              <Route path="houses/add-new" element={<AddNewHouse />} />
              <Route path="bookings" element={<Bookings />} />
            </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
